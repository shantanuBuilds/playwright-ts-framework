import {test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';
import { environment } from '../config/environment';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { checkoutData } from '../test-data/checkoutData';

test('Login Test', async ({ page })=>
{
    const loginPage = new LoginPage(page);

    await page.goto(environment.baseURL);

    await loginPage.login(
        loginData.username,
        loginData.password
    );

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productsPage.verifyProductsPage();

    await productsPage.addToCart();

    await productsPage.openCart();

    await cartPage.verifyBackpackInCart();

    //await cartPage.removeProduct();

    //await cartPage.verifyProductRemoved();

    await cartPage.verifyProductDescription();

    await cartPage.verifyProductPrice();

    await cartPage.verifycontinueShoppingButton();

    await cartPage.clickCheckoutButton();

    await checkoutPage.verifyPageTtile();

    await checkoutPage.fillUserInformation(
        checkoutData.firstName,
        checkoutData.lastName,
        checkoutData.postalCode
    );
});