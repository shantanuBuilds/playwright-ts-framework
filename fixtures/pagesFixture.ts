import { test as base } from '@playwright/test';        // Take Playwright's original test and call it "base"
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { OverviewPage } from '../pages/OverviewPage';
import { CompletePage } from '../pages/CompletePage';

type PageFixtures = {                                   //My custom fixture will provide: productsPage
    productsPage: ProductsPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    overviewPage: OverviewPage;
    completePage: CompletePage;
};

export const test = base.extend<PageFixtures>({

    productsPage: async({ page }, use) => {             //Create a fixture named productsPage
                                                        // { page } Playwright built-in fixtur
        const productsPage = new ProductsPage(page);    // Create ProductsPage object

        await use(productsPage);                       //Give this object to the test
    },

    cartPage: async({ page }, use) => {

        const cartPage = new CartPage(page);

        await use(cartPage);
    },

    checkoutPage: async({ page }, use) => {

        const checkoutPage = new CheckoutPage(page);

        await use(checkoutPage);
    },

    overviewPage: async({ page }, use) => {

        const overviewPage = new OverviewPage(page);

        await use(overviewPage);
    },

    completePage: async({ page }, use) => {

        const completePage = new CompletePage(page);

        await use(completePage)
    }

});