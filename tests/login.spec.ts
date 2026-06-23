import { expect } from '@playwright/test';
import { test } from '../fixtures/pagesFixture';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';
import { environment } from '../config/environment';
import { checkoutData } from '../test-data/checkoutData';


test.beforeEach(async ({ page })=> //beforeEach will not a 'test name' because this is a hook not a test
{
    const loginPage = new LoginPage(page);

    await page.goto(environment.baseURL);

    await loginPage.login(
        loginData.username,
        loginData.password
    );

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});


