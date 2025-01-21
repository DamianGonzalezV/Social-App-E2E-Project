import { test } from "@playwright/test";

test.describe("Log in process", () => {
  test("valid log in credentials", async ({ page }) => {
    await page.goto("http://127.0.0.1:3000/");

    await page.getByTestId("email-input-form").fill("janedoe@gmailcom");
    await page.getByTestId("password-input-form").fill("Securepassword1");

    await page.getByTestId("sign-in-button").click();
  });
});
