import { expect, Locator, Page } from "@playwright/test";

export class OverviewPage{

    readonly page: Page;

    readonly pageTitle: Locator;
    readonly finishButton: Locator;

    readonly paymentInformation: Locator;
    readonly shippingInformation: Locator;
    readonly totalPrice: Locator;


    constructor(page: Page){
        
        this.page = page;
        
        this.pageTitle = page.locator(".title");
    
        this.paymentInformation = page.locator("[data-test='payment-info-label']");
        this.shippingInformation = page.locator("[data-test='shipping-info-label']");
        this.totalPrice = page.locator(".summary_total_label");

        this.finishButton = page.locator("#finish");
    }

    async verifyOverviewPage(){

        await expect(this.pageTitle).toBeVisible();
    } 

    async verifyPaymentInformation(){

        await expect(this.paymentInformation).toBeVisible();
    }

    async verifyShippingInformation(){

        await expect(this.shippingInformation).toBeVisible();
    }

    async verifyTotalPrice(){

        await expect(this.totalPrice).toBeVisible();
    }
    
    async clickFinish(){

        await this.finishButton.click();
    }
}