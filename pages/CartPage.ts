import { expect, Locator, Page } from '@playwright/test'

export class CartPage{

    readonly page: Page;
    readonly backpackItem: Locator;

    constructor (page: Page){

        this.page = page;
        this.backpackItem = page.locator('[data-test="inventory-item-name"]');
    }

    async verifyBackpackInCart(){

        await expect(this.backpackItem).toBeVisible();
    }

}