export const runtime = "nodejs";

export async function POST(req) {
  const puppeteer = (await import("puppeteer-core")).default;
  const chromium = (await import("@sparticuz/chromium")).default;

  const executablePath = await chromium.executablePath();
  if (!executablePath) throw new Error("Chromium executable not found!");

  const data = await req.json();

  const browser = await puppeteer.launch({
    headless: true,
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath,
  });

  const page = await browser.newPage();

  const url = "https://resume-print-three.vercel.app";

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
