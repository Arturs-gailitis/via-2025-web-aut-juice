import { BasePage } from "./basePage";

export class OrderCompletionPage extends BasePage {
    static get url() {
        return '/#/order-completion/fe01-e3492e07027ce891';
    }

    static get validateConfermation() {
        return cy.get('h1.confirmation');
    }
}