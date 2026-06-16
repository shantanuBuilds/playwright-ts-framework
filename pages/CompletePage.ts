import { Locator, Page, Expect, expect } from "@playwright/test";

export class CompletePage{

    readonly page: Page;

    readonly pageTitle: Locator;
    readonly orderSuccessMessage: Locator;

    constructor(page: Page){

        this.page = page;

        this.pageTitle = page.locator(".title");
        this.orderSuccessMessage = page.locator(".complete-header");
    }   

    async verifyPageTitle(){

        await expect(this.pageTitle).toHaveText("Checkout: Complete!")
    }

    async verifyOrderSuccessMessage(){

        await expect(this.orderSuccessMessage).toHaveText("Thank you for your order!")
        
    }   
}