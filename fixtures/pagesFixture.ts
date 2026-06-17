import { test as base } from '@playwright/test';        // Take Playwright's original test and call it "base"
import { ProductsPage } from '../pages/ProductsPage';

type pageFixtures = {                                   //My custom fixture will provide: productsPage
    productsPage: ProductsPage;
};

export const test = base.extend<pageFixtures>({

    productsPage: async({ page }, use) => {             //Create a fixture named productsPage
                                                        // { page } Playwright built-in fixtur
        const productsPage = new ProductsPage(page);    // Create ProductsPage object

        await use(productsPage)                         //Give this object to the test
    }

});