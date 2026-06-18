import { expect } from '@playwright/test';
import { test } from '../fixtures/pagesFixture';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';
import { environment } from '../config/environment';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { checkoutData } from '../test-data/checkoutData';
import { OverviewPage } from '../pages/OverviewPage';
import { CompletePage } from '../pages/CompletePage';

test.beforeEach(async ({ page })=> //beforeEach will not a 'test name' because this is a hook not a test
{
    const loginPage = new LoginPage(page);

    await page.goto(environment.baseURL);

    await loginPage.login(
        loginData.username,
        loginData.password
    );
});

test('Complete Purchase Flow', async ({ page, productsPage, cartPage, checkoutPage, 
    overviewPage, completePage })=> {
    // Business flow starts here

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    //const productsPage = new ProductsPage(page);
    //const cartPage = new CartPage(page);
    //const checkoutPage = new CheckoutPage(page);
    //const overviewPage = new OverviewPage(page);
    //const completePage = new CompletePage(page);

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

    await checkoutPage.verifyPageTitle();

    await checkoutPage.fillUserInformation(
        checkoutData.firstName,
        checkoutData.lastName,
        checkoutData.postalCode
    );

    await checkoutPage.clickContinue();

    await overviewPage.verifyOverviewPage();

    await overviewPage.verifyPaymentInformation();

    await overviewPage.verifyShippingInformation();

    await overviewPage.verifyTotalPrice();

    await overviewPage.clickFinish();

    await completePage.verifyPageTitle();

    await completePage.verifyOrderSuccessMessage();
});

test ('Add product To Cart', async({ productsPage, cartPage })=> {

    await productsPage.verifyProductsPage();

    await productsPage.addToCart();

    await productsPage.openCart();

    await cartPage.verifyBackpackInCart();
});

test('Fixture Test', async ({ productsPage }) => {

    await productsPage.verifyProductsPage();
});