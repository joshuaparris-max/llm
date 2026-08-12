import { chromium } from 'playwright';

(async () => {
  console.log("Starting QA test with Playwright for LLM Gladiator Arena...");
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(`Console Error: ${msg.text()}`);
    }
  });
  
  page.on('pageerror', error => {
    errors.push(`Page Error: ${error.message}`);
  });

  try {
    await page.goto('http://localhost:8000/index.html', { waitUntil: 'networkidle' });
    const title = await page.title();
    console.log(`Visited Homepage. Title: ${title}`);
    
    // Check for 'Simulate round' button
    const hasButton = await page.evaluate(() => document.body.innerText.includes('Simulate round'));
    if (hasButton) {
      console.log("Found 'Simulate round' button.");
    } else {
      console.log("Could not find 'Simulate round' button text.");
    }

    await page.waitForTimeout(1000);
    
    console.log("\n--- QA Results ---");
    if (errors.length > 0) {
      console.log("Encountered errors during QA:");
      errors.forEach(e => console.log(e));
    } else {
      console.log("No console or page errors encountered! MVP is solid.");
    }
    
  } catch (err) {
    console.error("Test failed to execute:", err);
  } finally {
    await browser.close();
  }
})();
