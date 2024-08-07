import { test, expect } from "@playwright/test";

test("soft assertions", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
});
