import {test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';
import { environment } from '../config/environment';

test('Login Test', async ({ page })=>
{
    const loginPage = new LoginPage(page);

    await page.goto(environment.baseURL);

    await loginPage.login(
        loginData.username,
        loginData.password
    );

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
});