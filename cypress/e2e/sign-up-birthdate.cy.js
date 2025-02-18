/// <reference types="cypress" />

describe("Sign up birthdate screen", () => {
  beforeEach(() => {
    cy.visit("");
    cy.get('[data-cy="sign-up-button"]').click();
    cy.get('[data-cy="name-input"]').type("Jane Doe");
    cy.get('[data-cy="name-continue"]').click();

    cy.get('[data-cy="bd-error"]').should("not.be.visible");

    cy.get('[data-cy="bd-input"]').as("bdInput");
  });
  it("Should verify element visibility on birthdate screen", () => {
    cy.get('[data-cy="sign-up-name"]').should("not.be.visible");
    cy.get('[data-cy="sign-up-birthdate"]').should("be.visible");

    cy.get('[data-cy="bd-label"]').should("be.visible");
    cy.get("@bdInput").should("be.visible");
    cy.get('[data-cy="bd-continue"]').should("be.visible");
  });

  it("Should validate a valid birthdate", () => {
    cy.get("@bdInput").type("2006-01-01");
    cy.get('[data-cy="bd-continue"]').click();

    cy.get('[data-cy="sign-up-birthdate"]').should("not.be.visible");
    cy.get('[data-cy="sign-up-username"]').should("be.visible");
  });

  it("Should validate an invalid birthdate", () => {
    cy.get("@bdInput").type("2014-01-01");
    cy.get('[data-cy="bd-continue"]').click();

    cy.get('[data-cy="bd-error"]')
      .should("be.visible")
      .and("contain.text", "You should be at least 13 years old to continue")
      .and("have.css", "color", "rgb(220, 47, 2)");
  });
});
