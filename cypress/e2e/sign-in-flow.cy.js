describe("Element Validaton and Invalid Sign In Flows", () => {
  beforeEach(() => {
    cy.visit("");
    cy.get('[data-cy="email-input-form"]').as("emailInput");
    cy.get('[data-cy="password-input-form"]').as("passwordInput");
    cy.get('[data-cy="sign-in-button"]').as("btnSignIn");

    cy.get("@emailInput")
      .should("exist")
      .and("have.attr", "placeholder")
      .and("have.string", "sophie@example.com");
    cy.get("@passwordInput").should("exist");

    cy.get('[data-cy="email-condition"]').should("not.be.visible");
    cy.get('[data-cy="password-condition"]').should("be.visible");
  });

  it("Should validate correct error message for invalid email and invalid password", () => {
    cy.get("@emailInput").type("InvalidEmail");
    cy.get("@passwordInput").type("invalid");

    cy.get("@btnSignIn").click();

    cy.get('[data-cy="email-condition"]').should("exist");
    cy.get('[data-cy="email-condition"]')
      .should("be.visible")
      .and("contain", "Please add email")
      .and("have.css", "color", "rgb(220, 47, 2)");

    cy.get('[data-cy="one-number-span"]').should(
      "have.css",
      "color",
      "rgb(220, 47, 2)"
    );
    cy.get('[data-cy="eight-characters-span"]').should(
      "have.css",
      "color",
      "rgb(220, 47, 2)"
    );
  });

  it("Should validate correct error message for invalid email and valid password", () => {
    cy.get("@emailInput").type("InvalidEmail");

    cy.get("@passwordInput").type("v4lidpassw0rd");

    cy.get("@btnSignIn").click();

    cy.get('[data-cy="email-condition"]').should("exist");
    cy.get('[data-cy="email-condition"]')
      .should("be.visible")
      .and("contain", "Please add email")
      .and("have.css", "color", "rgb(220, 47, 2)");

    cy.get('[data-cy="one-number-span"]').should(
      "not.have.css",
      "color",
      "rgb(220, 47, 2)"
    );
    cy.get('[data-cy="eight-characters-span"]').should(
      "not.have.css",
      "color",
      "rgb(220, 47, 2)"
    );
  });

  it("Should validate correct error message for valid email and password misssing number", () => {
    cy.get("@emailInput").type("janedoe@gmail.com");
    cy.get("@passwordInput").type("passwithoutnumb");
    cy.get("@btnSignIn").click();
    cy.get('[data-cy="one-number-span"]').should(
      "have.css",
      "color",
      "rgb(220, 47, 2)"
    );
  });

  it("Should validate correct error message for valid email and password less than 8 characters", () => {
    cy.get("@emailInput").type("janedoe@gmail.com");
    cy.get("@passwordInput").type("sh0rtp");
    cy.get("@btnSignIn").click();
    cy.get('[data-cy="eight-characters-span"]').should(
      "have.css",
      "color",
      "rgb(220, 47, 2)"
    );
  });

  it("Should validate correct error message for valid email and password less than 8 characters and no number", () => {
    cy.get("@emailInput").type("janedoe@gmail.com");
    cy.get("@passwordInput").type("passw");
    cy.get("@btnSignIn").click();
    cy.get('[data-cy="one-number-span"]').should(
      "have.css",
      "color",
      "rgb(220, 47, 2)"
    );
    cy.get('[data-cy="eight-characters-span"]').should(
      "have.css",
      "color",
      "rgb(220, 47, 2)"
    );
  });
});
