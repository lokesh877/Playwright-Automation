import {test as setup, expect} from "@playwright/test";
const authFile = '.auth/user.json';

setup('authenticate', async ({ page }) => {

    await page.goto('https://thenomadnova.com/login');

    await page.getByRole("textbox", { name: "email" }).fill('Lokesh113@gmail.com');
    await page.getByRole("textbox", { name: "password" }).fill('Lokesh113@123');
    await page.locator("#agree-terms").check();
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page).toHaveURL('https://thenomadnova.com/dashboard');

    // Save login session
    await page.context().storageState({
        path: authFile
    });
});
