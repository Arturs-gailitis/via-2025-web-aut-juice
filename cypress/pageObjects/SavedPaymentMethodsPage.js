import { BasePage } from "./basePage";

export class SavedPaymentMethodsPage extends BasePage {
    static get url() {
        return '/#/saved-payment-methods';
    }

    static get expandNewCard() {
        return cy.get('#mat-expansion-panel-header-0');
    }

    static get typeText() {
        return cy.get('input.mat-mdc-input-element');
    }

    static get clickDate() {
        return cy.get('select.mat-mdc-input-element');
    }

    static get clickSubmit() {
        return cy.get('button:contains("Submit")');
    }

    static get verifyPaymentMethod() {
        return cy.get('mat-cell.mat-mdc-cell')
    }
}