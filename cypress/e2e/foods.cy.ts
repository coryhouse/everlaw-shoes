/// <reference types="cypress" />

it("should display the foods page at the root URL and support filtering menu items", () => {
  cy.visit("http://localhost:3000");
  cy.findByRole("heading", { name: "Menu" });
  cy.findByLabelText("Filter by tag").select("Breakfast");
  cy.findByText("1 Breakfast items found.");
});
