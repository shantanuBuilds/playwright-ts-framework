import { test } from "../fixtures/pagesFixture";
import { loginData } from "../test-data/loginData";
import { LoginPage } from "../pages/LoginPage";
import { environment } from "../config/environment";
import { expect } from "@playwright/test";


for(const user of loginData){

    test(`Add product to cart - ${user.username}`, async ({ page, productsPage, cartPage })=> {

    const loginPage = new LoginPage(page);

    await page.goto(environment.baseURL);

    await loginPage.login(
        user.username,
        user.password
        );

    await productsPage.verifyProductsPage();

    await productsPage.addToCart();

    await productsPage.openCart();

    await cartPage.verifyBackpackInCart();

    });

}

