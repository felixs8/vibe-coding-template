import { test, expect } from "@playwright/test";

test("homepage displays the hero heading", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Hello World" })).toBeVisible();
});
