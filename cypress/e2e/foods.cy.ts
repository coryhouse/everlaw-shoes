/// <reference types="cypress" />

it("should display the foods page at the root URL and support filtering menu items", () => {
  cy.visit("http://localhost:3000");
  cy.findByRole("heading", { name: "Menu" });
  cy.findByLabelText("Filter by tag").select("Breakfast");
  cy.findByText("1 Breakfast items found.");
});

it("should support navigating between pages", () => {
  cy.visit("http://localhost:3000");
  cy.findByRole("link", { name: "Manage Menu" }).click();
  cy.findByRole("heading", { name: "Manage Menu" });
  cy.findByRole("link", { name: "Menu" }).click();
  cy.findByRole("heading", { name: "Menu" });
});
