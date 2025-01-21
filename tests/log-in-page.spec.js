import { test } from "@playwright/test";

test.describe("Log in process", () => {
  test("validate inputs and buttons are visible", async ({ page }) => {
    await page.goto("https://ornate-paletas-782a0a.netlify.app/");

    await page.getByTestId("email-input-form").isVisible();
    await page.getByTestId("password-input-form").isVisible();
    await page.getByTestId("sign-in-button").isVisible();
  });
  test("valid log in credentials", async ({ page }) => {
    await page.goto("https://ornate-paletas-782a0a.netlify.app/");

    await page.getByTestId("email-input-form").fill("janedoe@gmailcom");
    await page.getByTestId("password-input-form").fill("Securepassword1");

    await page.getByTestId("sign-in-button").click();
  });
});
