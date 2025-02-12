/// <reference types="cypress" />

describe("Sign up name screen", () => {
  beforeEach(() => {
    cy.visit("");
    cy.get('[data-cy="sign-up-button"]').click();
    cy.get('[data-cy="name-label"]').as("nameLabel");
    cy.get('[data-cy="name-input"]').as("nameInput");
    cy.get('[data-cy="name-error"]').as("nameError");
    cy.get('[data-cy="name-continue"]').as("nameContinueBtn");
  });
  it("Should verify element visibility", () => {
    cy.get('[data-cy="log-in"]').should("not.be.visible");
    cy.get('[data-cy="sign-up-name"]').should("be.visible");
    cy.get("@nameLabel").should("contain.text", "What's your name?");
    cy.get("@nameInput").should("be.visible");
    cy.get("@nameError").should(
      "contain.text",
      "Name should be at least 3 letters"
    );
    cy.get("@nameContinueBtn").should("be.visible");
  });
  it("Should verify correct error message and style for invalid name", () => {
    cy.get("@nameInput").type("tw");
    cy.get("@nameContinueBtn").click();
    cy.get("@nameError").should("have.css", "color", "rgb(220, 47, 2)");
  });
  it("Should verify continue button on sign up name screen", () => {
    cy.get("@nameInput").type("Jane Doe");
    cy.get("@nameContinueBtn").click();
    cy.get('[data-cy="sign-up-name"]').should("not.be.visible");
    cy.get('[data-cy="sign-up-birthdate"]').should("be.visible");
  });
});
