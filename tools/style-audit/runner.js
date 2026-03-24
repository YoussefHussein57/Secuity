const fs = require("fs/promises");
const path = require("path");
const { chromium } = require("playwright");

async function main() {
  const url = process.argv[2];
  const targetSelector = process.argv[3] || null;

  if (!url) {
    console.error("Usage: node tools/style-audit/runner.js <url> [selector]");
    process.exit(1);
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });

  try {
    await page.goto(url, {
      waitUntil: "networkidle",
      timeout: 60000
    });

    await page.waitForTimeout(1500);

    const extractorPath = path.join(__dirname, "extractor.js");
    const extractorCode = await fs.readFile(extractorPath, "utf8");

    const result = await page.evaluate(
      ({ extractorCode, targetSelector }) => {
        // eslint-disable-next-line no-eval
        eval(extractorCode);
        return runStyleAudit(targetSelector);
      },
      { extractorCode, targetSelector }
    );

    const outputDir = path.join(__dirname, "output");
    await fs.mkdir(outputDir, { recursive: true });

    const outputPath = path.join(outputDir, `style-audit-${Date.now()}.json`);
    await fs.writeFile(outputPath, JSON.stringify(result, null, 2), "utf8");

    console.log(JSON.stringify({
      success: true,
      outputPath,
      summary: {
        sections: result.sections?.length || 0,
        url: result.page?.url || url
      }
    }, null, 2));
  } catch (error) {
    console.error(JSON.stringify({
      success: false,
      message: error.message
    }, null, 2));
    process.exit(1);
  } finally {
    await browser.close();
  }
}

main();