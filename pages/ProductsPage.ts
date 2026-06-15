import { Page, Locator, expect } from '@playwright/test'

export class ProductsPage {

    readonly page: Page;
    readonly productTitle: Locator;
    readonly addToCartButton: Locator;
    readonly cartIcon: Locator;

    constructor (page: Page) {
        this.page = page;
        this.productTitle = page.locator('.title');
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async verifyProductsPage(){

        await expect(this.productTitle).toBeVisible();
    }

    async addToCart(){

        await this.addToCartButton.click();
    }

    async openCart(){

        await this.cartIcon.click();
    }   

}