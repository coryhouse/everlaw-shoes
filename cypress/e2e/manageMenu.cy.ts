/// <reference types="cypress" />

it("should support adding and removing a menu item", () => {
  cy.visit("http://localhost:3000/manage");
  // Add item
  cy.findByLabelText("Name").type("New Menu Item");
  cy.findByLabelText("Description").type("Description");
  cy.findByLabelText("Price").clear().type("10.95");
  cy.findByRole("button", { name: "Save Menu Item" }).click();

  // Assure added item displays
  cy.findByRole("status").should("have.text", "Menu Item Saved.");
  cy.findByRole("heading", { name: "New Menu Item" });
  cy.findByText("Description");
  cy.findByText("$10.95");

  // Now edit item.
  cy.findByRole("link", { name: "New Menu Item" }).click();
  cy.findByLabelText("Name").clear().type("New Menu Item2");
  cy.findByLabelText("Description").clear().type("Description2");
  cy.findByLabelText("Price").clear().type("11");
  cy.findByRole("button", { name: "Save Menu Item" }).click();
  cy.findByRole("status").should("have.text", "Menu Item Saved.");

  // Assure edited item displays
  cy.findByRole("heading", { name: "New Menu Item2" });
  cy.findByText("Description2");
  cy.findByText("$11");

  // Now delete it.
  cy.findByLabelText("Delete New Menu Item2").click();
  cy.findByRole("heading", { name: "New Menu Item2" }).should("not.exist");
});
