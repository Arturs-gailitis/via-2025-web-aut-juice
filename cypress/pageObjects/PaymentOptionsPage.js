import { BasePage } from "./basePage";

export class PaymentOptionsPage extends BasePage {
    static get url() {
        return "/#/payment/shop";
    }

    static get selectCard() {
        return cy.get('input.mdc-radio__native-control');
    }

    static get clickContinue() {
        return cy.get('button:contains("Continue")');
    }
} 