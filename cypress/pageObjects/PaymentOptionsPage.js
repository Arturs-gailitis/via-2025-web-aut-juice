import { BasePage } from "./basePage";

export class PaymentOptionsPage extends BasePage {
    static get url() {
        return "/#/payment/shop";
    }

    static get selectCard() {
        return cy.get('div.mat-radio-button');
    }
} 