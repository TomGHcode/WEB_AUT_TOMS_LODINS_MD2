import { BasePage } from "./BasePage";

export class HistoryPage extends BasePage {
    static get url() {
        return "https://katalon-demo-cura.herokuapp.com/history.php#history";
    }

    static get validateAppointment() {
        return cy.get("section#history");
    }
}