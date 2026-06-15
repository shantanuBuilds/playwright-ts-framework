import { expect, Locator, Page } from '@playwright/test'

export class CartPage{

    readonly page: Page;
    readonly backpackItem: Locator;
    readonly removeCartButton: Locator;

    constructor (page: Page){

        this.page = page;
        this.backpackItem = page.locator('[data-test="inventory-item-name"]');
        this. removeCartButton = page.locator('#remove-sauce-labs-backpack');
    }

    async verifyBackpackInCart(){

        await expect(this.backpackItem).toBeVisible();
    }

    async removeProduct(){ //Action

        await this.removeCartButton.click();
    }

    async verifyProductRemoved(){ //Validation

        await expect(this.backpackItem).not.toBeVisible();
    }
}