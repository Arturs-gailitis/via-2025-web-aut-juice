import { BasePage } from "./basePage";

export class CreateAddressPage extends BasePage {
    static get url() {
        return '/#/address/create';
    }

    static get typeText() {
        return cy.get('input.mat-mdc-input-element');
    }

    static get typeAddress() {
        return cy.get('textarea.mat-mdc-input-element');
    }

    static get clickSubmit() {
        return cy.get('button:contains("Submit")');
    }
}