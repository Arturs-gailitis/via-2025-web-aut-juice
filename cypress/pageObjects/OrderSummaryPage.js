import { BasePage } from "./basePage";

export class OrderSummaryPage extends BasePage {
    static get url() {
        return '/#/order-summary';
    }

    static get clickPlaceYourOrder() {
        return cy.get('button:contains("Place your order and pay")');
    } 
}