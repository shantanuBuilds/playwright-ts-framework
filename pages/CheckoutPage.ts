import { expect, Locator, Page } from "@playwright/test";

export class CheckoutPage{

    readonly page: Page;

    readonly pageTitle: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly zipCodeInput: Locator;

    readonly continueButton: Locator;

    constructor(page: Page){

        this.page = page;

        this.pageTitle = page.locator(".title");
        this.firstNameInput = page.locator("#first-name");
        this.lastNameInput = page.locator("#last-name");
        this.zipCodeInput = page.locator("#postal-code");

        this.continueButton = page.locator("#continue");
        
    }

    async verifyPageTitle(){

        await expect(this.pageTitle).toBeVisible();
    }

    async fillUserInformation(firstName: string, lastName: string, postalCode: string){

        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.zipCodeInput.fill(postalCode);
    }

    async clickContinue(){
    
        await this.continueButton.click();
}
    
}