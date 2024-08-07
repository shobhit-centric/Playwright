import { test, expect } from "@playwright/test";

test("soft assertions", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  // Hard assertion
  // await expect.(page).toHaveTitle("STORE");
  // await expect(page).toHaveURL(page.url());
  // await expect(page.locator(".navbar-brand")).toBeVisible();

  // Soft assertion
  await expect.soft(page).toHaveTitle("STORE123");
  await expect(page).toHaveURL(page.url());
  await expect(page.locator(".navbar-brand")).toBeVisible();
});
