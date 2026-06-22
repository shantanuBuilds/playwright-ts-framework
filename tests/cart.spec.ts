import { CartPage } from "../pages/CartPage";
import { test } from "../fixtures/pagesFixture";
import { loginData } from "../test-data/loginData";
import { LoginPage } from "../pages/LoginPage";
import { environment } from "../config/environment";
import { expect } from "@playwright/test";


test.beforeEach(async ({ page }) => 
{
    const loginPage = new LoginPage(page);

    await page.goto(environment.baseURL);

    await loginPage.login (
        loginData.username,
        loginData.password
    )

    //await loginPage.loginButton;
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test ('Add product To Cart', async({ productsPage, cartPage })=> {

    await productsPage.verifyProductsPage();

    await productsPage.addToCart();

    await productsPage.openCart();

    await cartPage.verifyBackpackInCart();
});


