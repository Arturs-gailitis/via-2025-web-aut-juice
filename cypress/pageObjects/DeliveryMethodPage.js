import { BasePage } from "./basePage";

export class DeliveryMethodPage extends BasePage {
    static get url() {
        return '/#/delivery-method';
    }

    static get selectDelivery() {
        return cy.get(".mat-mdc-radio-button");
    }

    static get clickContinue() {
        return cy.get('button:contains("Continue")');
    }
}