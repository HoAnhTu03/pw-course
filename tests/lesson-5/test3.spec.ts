import {test} from "@playwright/test"
test("Test01", async({page}) => {
    await test.step("Navigation to Todo page", async() => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator('a[href="03-xpath-todo-list.html"]').click()
    });
    await test.step("Add 100 todo item with content", async() => {
        for(let i =0; i<= 100; i++){
            await page.fill("//input[@id='new-task']",`To do ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    });
    await test.step("Delete all odd item", async() => {
        // 
    })


})