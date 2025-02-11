/// <reference types="cypress" />

describe("Sign up name screen", () => {
  beforeEach(() => {
    cy.visit("");
    cy.get('[data-cy="name-label"]').as("nameLabel");
    cy.get('[data-cy="name-input"]').as("nameInput");
    cy.get('[data-cy="name-error"]').as("nameError");
    cy.get('[data-cy="name-continue"]').as("nameContinueBtn");
  });
  it("Should verify element visibility", () => {
    cy.get("@nameLabel").should("contain.text", "What's your name?");
    cy.get("@nameInput").should("be.visible");
    cy.get("@nameError").should(
      "contain.text",
      "Name should be at least 1 letter"
    );
    cy.get("nameContinueBtn").should("be.visible");
  });
  it("Should verify correct error message and style for invalid name", () => {
    cy.get("@nameInput").type("tw");
    cy.get("nameContinueBtn").click();
    cy.get("@nameError").should("have.css", "color", "#dc2f02");
  });
});
