import { test } from "@playwright/test"
test("Test01", async ({ page }) => {
    await test.step("Navigation to Register Page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator('a[href="01-xpath-register-page.html"]').click();
    });
    await test.step("Fill information & click Button ", async () => {
        await page.fill("//input[@id='username']", "HO Anh Tu");
        await page.fill("//input[@id='email']", "anhtudz2k03@gmail.com");
        await page.locator('input[value="male"]').check();
        await page.locator('input[value="reading"]').check();
        await page.locator("//option[@value='technology']").click();
        await page.locator("//input[@id='dob']").pressSequentially("12/24/2003");
        await page.setInputFiles('input[type="file"]', '/pw-course/lalala.txt');
        await page.fill("//textarea[@id='bio']", "TESTTEST");
        await page.fill("//input[@id='rating']", "6");
        await page.locator("//input[@id='favcolor']").click();
        await page.locator("//input[@id='newsletter']").check();

        await page.locator("//button[@type='submit']").click();
        
    });


})