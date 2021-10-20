var testdata = require('../../fixtures/Testdata for Inputforms.json');

var nothanks = 'a[class$="at-cm-no-button"]';
var inputformtext = "div[class$='text-left']>h2";
var firstnamel = 'input[name="first_name"]';
var lastnamel = 'input[name="last_name"]';
var emaill = 'input[name="email"]';
var phonel = 'input[name="phone"]';
var addressl = 'input[name="address"]';
var cityl = 'input[name="city"]';
var statel = 'select[name="state"]';
var zipl = 'input[name="zip"]';
var websitel = 'input[name="website"]';
var radiobuttonl = 'input[value="yes"]';
var projectdescriptionl = '[placeholder*="Description"]';
var sendl = 'button[type="submit"]';
var downarrow = 'i[class$="chevron-down"]';
var rightarrow = 'i[class$="chevron-right"]';
var inputforms = ('Input Forms');
var inputformsubmit = ('Input Form Submit');
var allexamples = ('a', 'All Examples');
var inputformsmenulist = ('a', 'Input Forms');
var datepickers = ('a', 'Date pickers');
var table = ('a', 'Table');
var progressbarsandsliders = ('a', 'Progress Bars & Sliders');
var alertsandmodals = ('a', 'Alerts & Modals');
var listbox = ('a', 'List Box');
var others = ('a', 'Others');

describe('Selenium Easy-Input Forms', function () {
  beforeEach(() => {
    cy.visit('https://www.seleniumeasy.com/test/');
    cy.get(nothanks).click();
  })

  it('Verification of Input form with validations page', function () {
    cy.contains(inputforms).click();
    cy.contains(inputformsubmit).click();
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get(inputformtext).should("have.text", "Input form with validations");
    //cy.contains('h2','Input form with validations').should('be.visible');
  })

  it('Verification of Menu List', function () {
    cy.contains(inputforms).click();
    cy.contains(inputformsubmit).click();
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.contains(allexamples).should('be.visible');
    cy.contains(inputformsmenulist).should('be.visible');
    cy.contains(datepickers).should('be.visible');
    cy.contains(table).should('be.visible');
    cy.contains(progressbarsandsliders).should('be.visible');
    cy.contains(alertsandmodals).should('be.visible');
    cy.contains(listbox).should('be.visible');
    cy.contains(others).should('be.visible');

  })

  it('Verify that Menu Lists are disapeared', function () {
    cy.contains(inputforms).click();
    cy.contains(inputformsubmit).click();
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.contains(allexamples).should('be.visible');
    cy.contains(inputformsmenulist).should('be.visible');
    cy.contains(datepickers).should('be.visible');
    cy.contains(table).should('be.visible');
    cy.contains(progressbarsandsliders).should('be.visible');
    cy.contains(alertsandmodals).should('be.visible');
    cy.contains(listbox).should('be.visible');
    cy.contains(others).should('be.visible');
    cy.get(downarrow).click();
    cy.get(rightarrow).should('be.visible');
  })

  it('Form-Contact Us Today', function () {
    cy.contains(inputforms).click();
    cy.contains(inputformsubmit).click();
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get(Inputformtext).should("have.text", "Input form with validations");
    cy.get(firstnamel).type(testdata.firstname);
    cy.get(lastnamel).type(testdata.lastname);
    cy.get(emaill).type(testdata.email);
    cy.get(phonel).type(testdata.phone);
    cy.get(addressl).type(testdata.address);
    cy.get(cityl).type(testdata.city);
    cy.get(statel).select(testdata.state);
    cy.get(zipl).type(testdata.zipcode);
    cy.get(websitel).type(testdata.website);
    cy.get(radiobuttonl).click();
    cy.get(projectdescriptionl).type(testdata.projectdescription);
    cy.get(sendl).click();
  })
})



