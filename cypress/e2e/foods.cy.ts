/// <reference types="cypress" />

it("should display the foods page at the root URL", () => {
  cy.visit("http://localhost:3000");
});
