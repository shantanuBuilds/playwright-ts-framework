import { expect } from '@playwright/test';
import { test } from '../fixtures/pagesFixture';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';
import { environment } from '../config/environment';
import { checkoutData } from '../test-data/checkoutData';


for (const user of loginData){

    test(`@smoke Cart Purchase Flow - ${user.username}`,async ({ page, productsPage, cartPage, checkoutPage, 
    overviewPage, completePage  })=>{

        const loginPage = new LoginPage(page); 

        await page.goto(environment.baseURL);

        await loginPage.login(
            user.username,
            user.password
        );

    // Business flow starts here
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

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
}

/*test.beforeEach(async ({ page }) => 
{
    const loginPage = new LoginPage(page); 

    await page.goto(environment.baseURL);

    await loginPage.login(
        loginData.username,
        loginData.password
    );

    await loginPage.loginButton;

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});


test('@smoke Complete Purchase Flow', async ({ productsPage, cartPage, checkoutPage, 
    overviewPage, completePage })=> {
    
    // Business flow starts here

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
}); */