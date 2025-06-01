import { BasePage } from "./BasePage";

export class SummaryPage extends BasePage {
    static get url() {
        return "https://katalon-demo-cura.herokuapp.com/appointment.php#summary";
    }

    static get validateFacility() {
        return cy.get("#facility");
    }
     
    static get validateReadmission() {
        return cy.get("#hospital_readmission");
    }

    static get validateProgram() {
        return cy.get("#program");
    }

    static get validateDate() {
        return cy.get("#visit_date");
    }

    static get validateComment() {
        return cy.get("#comment");
    }
}