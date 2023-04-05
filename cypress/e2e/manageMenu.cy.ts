/// <reference types="cypress" />

it("should support adding and removing a menu item", () => {
  cy.visit("http://localhost:3000/manage");
  cy.findByLabelText("Name").type("New Menu Item");
  cy.findByLabelText("Description").type("Description");
  cy.findByLabelText("Price").clear().type("10.95");
  cy.findByRole("button", { name: "Save Menu Item" }).click();
  cy.findByRole("status").should("have.text", "Menu Item Saved.");
  cy.findByRole("heading", { name: "New Menu Item" });
  cy.findByText("Description");
  cy.findByText("$10.95");

  // Now delete it.
  cy.findByLabelText("Delete New Menu Item").click();
  cy.findByRole("heading", { name: "New Menu Item" }).should("not.exist");
});
