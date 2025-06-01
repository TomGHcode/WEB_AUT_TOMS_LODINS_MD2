import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { AppointmentPage } from "../pageObjects/AppointmentPage";
import { SummaryPage } from "../pageObjects/SummaryPage";
import { HistoryPage } from "../pageObjects/HistoryPage";


describe('Scenario 1', () => {
    beforeEach(() => {
      HomePage.visit();
    });

  it('Make an Appointment', () => {
    
    // Click Make Appointment button
    HomePage.appointmentButton.click();

    // Demo account login
    LoginPage.usernameField.type("John Doe");
    LoginPage.passwordField.type("ThisIsNotAPassword");
    LoginPage.loginButton.click();

    // Setting appointment values
    AppointmentPage.facilitySelection.select("Seoul CURA Healthcare Center");
    AppointmentPage.readmissionCheck.click();
    AppointmentPage.programChoice.contains("Medicaid").click();
    AppointmentPage.openVisitDate.click();
    AppointmentPage.pickDateForVisit.contains("30").click();
    AppointmentPage.clickOff.contains("Make Appointment").click();
    AppointmentPage.commentField.click().type("CURA Healthcare Service");
    AppointmentPage.bookAppointmentButton.click();

    // Validation
    SummaryPage.validateFacility.should("contain.text", "Seoul CURA Healthcare Center");
    SummaryPage.validateReadmission.should("contain.text", "Yes");
    SummaryPage.validateProgram.should("contain.text", "Medicaid");
    SummaryPage.validateDate.should("contain.text", "30");
    SummaryPage.validateComment.should("contain.text", "CURA Healthcare Service");
  })
});


describe('Scenario 2', () => {
    beforeEach(() => {
      HomePage.visit();
    });
  
    
  it("Appointment history empty", () => {

    // Click Make Appointment button
    HomePage.appointmentButton.click();

    // Demo account login
    LoginPage.usernameField.type("John Doe");
    LoginPage.passwordField.type("ThisIsNotAPassword");
    LoginPage.loginButton.click();

    //click menu
    AppointmentPage.menuButton.click();

    //Check if the sidebar is present
    AppointmentPage.sidebar.should("has.class", "active");

    //Click history
    AppointmentPage.historyButton.click();
    HistoryPage.validateAppointment.should("contain.text", "No appointment.");
  })
})