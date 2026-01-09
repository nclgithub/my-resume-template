export const runtime = "nodejs";

export async function POST(req) {
    let puppeteer, chromium, executablePath;
    const isLocal = !process.env.NEXT_PUBLIC_SITE_URL;

    if (isLocal)
    {
        puppeteer = await import("puppeteer").then(m => m.default);
        executablePath = undefined;
    }
    else
    {
        puppeteer = await import("puppeteer-core").then(m => m.default);
        chromium = await import("@sparticuz/chromium").then(m => m.default);
        executablePath = await chromium.executablePath();
    }

    const data = await req.json();
    
    const browser = await puppeteer.launch({
        args: chromium?.args || [],
        defaultViewport: chromium?.defaultViewport || null,
        executablePath: executablePath,
        headless: true,
    });

    const page = await browser.newPage();

    const url = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    await page.goto(url + "/pdf?data=" + encodeURIComponent(JSON.stringify(data)), {
        waitUntil: 'networkidle0',
    });

    const pdf = await page.pdf({
        format: 'A4',
        printBackground: true,
    });

    await page.close();

    return new Response(pdf, {
        headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"',
        },
    });
}