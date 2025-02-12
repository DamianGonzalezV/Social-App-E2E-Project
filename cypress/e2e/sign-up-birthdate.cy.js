/// <reference types="cypress" />

describe("Sign up birthdate screen", () => {
  beforeEach(() => {
    cy.visit("");
    cy.get('[data-cy="sign-up-button"]').click();
    cy.get('[data-cy="name-input"]').type("Jane Doe");
    cy.get('[data-cy="name-continue"]').click();
  });
  it("Should verify element visibility on birthdate screen", () => {
    cy.get('[data-cy="sign-up-birthdate"]').should;
  });
});
