/// <reference types="cypress" />

it("should support adding a new menu item", () => {
  cy.visit("http://localhost:3000/manage");
  cy.findByLabelText("Name").type("New Menu Item");
  cy.findByLabelText("Description").type("Description");
  cy.findByLabelText("Price").type("10");
  cy.findByRole("button", { name: "Save Menu Item" }).click();
  cy.findByRole("status").should("have.text", "Menu Item Saved.");
  cy.findByRole("heading", { name: "New Menu Item" });
});
