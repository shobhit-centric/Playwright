const { test, expect } = require("@playwright/test");

test("assertionsTest", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");

  // 1. expect(page).toHaveURL()
  await expect(page).toHaveURL(page.url());

  // 2. expect(page).toHaveTitle()
  await expect(page).toHaveTitle("nopCommerce demo store");

  // 3. expect(locator).toBeVisible()
  const logoElement = page.locator(".header-logo");
  await expect(logoElement).toBeVisible();

  // 4. expect(locator).toBeEnabled()
  //    expect(locator).toBeDisabled()
  const searchStoreBox = page.locator("#small-searchterms");
  await expect(searchStoreBox).toBeEnabled();

  // 5. expect(locator).toBeChecked()
  await page.click(".ico-register");
  const maleRadioButton = await page.locator("#gender-male");
  await maleRadioButton.click();
  await expect(maleRadioButton).toBeChecked();

  // Check box
  const newsLetterCheckbox = page.locator("#Newsletter");
  await expect(newsLetterCheckbox).toBeChecked();
});
