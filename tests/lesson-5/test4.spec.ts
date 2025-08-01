import {test, expect} from "@playwright/test"
test("Test01", async({page}) => {
    await test.step("Navigation to Todo page", async() => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator('a[href="04-xpath-personal-notes.html"]').click()
    });
    await test.step("Add 10 note have title and 1 paragrap", async() => {
        for(let i=0; i<10; i++){
            await page.fill("//input[@id='note-title']", `Tiêu đề số ${i}`);
            await page.fill("//textarea[@id='note-content']", `Nội dung số ${i}`);
            await page.locator("//button[@id='add-note']").click();
        
        }
    });
    await test.step("Search note 6", async() => {
        await page.locator("//input[@id='search']").click();
        await page.fill("//input[@id='search']", "Nội dung số 6");
        

    });

})