import { expect, Locator, Page } from '@playwright/test'

export class CartPage{

    readonly page: Page;
    readonly backpackItem: Locator;
    //readonly removeCartButton: Locator;

    readonly productDescription: Locator;
    readonly productPrice: Locator;

    readonly continueShoppingButton: Locator;
    readonly checkoutButton: Locator;


    constructor (page: Page){

        this.page = page;
        this.backpackItem = page.locator('[data-test="inventory-item-name"]');
        //this.removeCartButton = page.locator('#remove-sauce-labs-backpack');

        this.productDescription = page.locator(".inventory_item_desc");
        this.productPrice = page.locator(".inventory_item_price");
        this.continueShoppingButton = page.locator("#continue-shopping");
        this.checkoutButton = page.locator("#checkout");
    }

    async verifyBackpackInCart(){

        await expect(this.backpackItem).toBeVisible();
    }

    /*async removeProduct(){ //Action

        await this.removeCartButton.click();
    }

    async verifyProductRemoved(){ //Validation

        await expect(this.backpackItem).not.toBeVisible();
    }*/

    async verifyProductDescription(){

        await expect(this.productDescription).toBeVisible();
    }

    async verifyProductPrice(){

        await expect(this.productPrice).toBeVisible();
    }

    async verifycontinueShoppingButton(){

        await expect(this.continueShoppingButton).toBeVisible();
    } 

    async clickCheckoutButton(){

        await this.checkoutButton.click();
    }

}