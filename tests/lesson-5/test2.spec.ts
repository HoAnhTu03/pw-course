import { test } from "@playwright/test"
test("Test01", async ({ page }) => {
    await test.step("Navigation to Product page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator('a[href="02-xpath-product-page.html"]').click();
    });
    await test.step("Add Product to Cart", async () => {
        await page.locator("//button[@class='add-to-cart' and @data-product-id='1']").dblclick();
        await page.locator("//button[@class='add-to-cart' and @data-product-id='2']").click({
            clickCount: 3
        });
        await page.locator("//button[@class='add-to-cart' and @data-product-id='3']").click();

    })


})