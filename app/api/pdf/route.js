export const runtime = "nodejs";

export async function POST(req) {
    const isLocal = !process.env.NEXT_PUBLIC_SITE_URL;

    let puppeteer, chromium, executablePath;

    if (isLocal) {
        // Local dev (Windows/Mac)
        puppeteer = await import("puppeteer").then(m => m.default);
    } else {
        // Vercel prod (Linux)
        puppeteer = await import("puppeteer-core").then(m => m.default);
        chromium = await import("@sparticuz/chromium").then(m => m.default);
        executablePath = await chromium.executablePath();
        if (!executablePath) throw new Error("Chromium executable not found on Vercel!");
    }

    const data = await req.json();

    const browser = await puppeteer.launch({
        headless: true,
        args: chromium?.args || [],
        defaultViewport: chromium?.defaultViewport || null,
        executablePath: isLocal ? undefined : executablePath,
    });

    const page = await browser.newPage();

    const url = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    await page.goto(url + "/pdf?data=" + encodeURIComponent(JSON.stringify(data)), {
        waitUntil: "networkidle0",
    });

    const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
    });

    await page.close();
    await browser.close();

    return new Response(pdf, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": 'attachment; filename="resume.pdf"',
        },
    });
}