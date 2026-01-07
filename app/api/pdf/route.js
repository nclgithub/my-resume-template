import puppeteer from 'puppeteer';

export async function POST(req) {
    const data = await req.json();

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
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