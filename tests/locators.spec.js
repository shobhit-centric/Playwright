// const { test, expect } = require("@playwright/test");
import { test, expect } from "@playwright/test";

test("locators", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  // Click on login button - property - Property
  // await page.locator("id=login2").click();

  await page.click("id=login2");

  // Enter username - CSS
  // await page.type("loginusername"); -- Deprecated
  await page.fill("#loginusername", "pavanol");

  // Enter password - CSS
  await page.fill("input[id='loginpassword']", "test@123");

  // Click on login button - XPATH
  await page.click("//*[contains(text(), 'Log in') and @type = 'button']");

  // Verify logout link
  const logoutLink = page.locator("//*[@id='logout2']");

  await expect(logoutLink).toBeVisible();

  await page.close();
});
