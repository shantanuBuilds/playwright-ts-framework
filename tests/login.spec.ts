import test, { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login Test', async ({ page })=>
{
    const loginPage = new LoginPage(page);

    await page.goto("https://www.saucedemo.com/");

    await loginPage.login(
         'standard_user',
        'secret_sauce'
    );
});