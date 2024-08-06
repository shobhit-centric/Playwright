const { test, expect } = require("@playwright/test");

test("Home Page", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  const pageTitle = await page.title();

  console.log(`Page title is: ${pageTitle}`);

  await expect(page).toHaveTitle("STORE");

  console.log(`Page url is: ${page.url()}`);

  await expect(page).toHaveURL(page.url());

  await page.close();
});
