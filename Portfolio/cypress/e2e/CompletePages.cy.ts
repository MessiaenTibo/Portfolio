describe('Home page complete', () => {
  it('Renders home page elements', () => {
    cy.visit('http://localhost:5173/');

    cy.get('[data-testid="cypress-title"]')
      .should('exist')
      .should('not.be.empty');

    cy.get('[data-testid="cypress-home-description-1"')
      .should('exist')
      .should('not.be.empty');

    cy.get('[data-testid="cypress-home-description-2"')
      .should('exist')
      .should('not.be.empty');

    cy.get('[data-testid="cypress-home-download-resume"')
      .should('exist')
      .should('not.be.empty');

    cy.get('[data-testid="cypress-home-experience-card"')
      .should('exist')
      .should('not.be.empty');

    cy.get('[data-testid="cypress-home-projects-card"')
      .should('exist')
      .should('not.be.empty');

    cy.get('[data-testid="cypress-home-socials-holder"')
      .should('exist')
      .should('not.be.empty');

    cy.get('[data-testid="cypress-home-sociallink-github"')
      .should('exist')
      .should('not.be.empty');

    cy.get('[data-testid="cypress-home-sociallink-email"')
      .should('exist')
      .should('not.be.empty');

    cy.get('[data-testid="cypress-home-sociallink-linkedin"')
      .should('exist')
      .should('not.be.empty');

    cy.get('[data-testid="cypress-programer-ilustration"')
      .should('exist')
      .should('not.be.empty');
  });
});

describe('About page complete', () => {
  it('Renderes about page elements', () => {
    cy.visit('http://localhost:5173/about');

    cy.get('[data-testid="cypress-title"]')
      .should('exist')
      .should('not.be.empty');

    cy.get('[data-testid="cypress-about-description-1"')
      .should('exist')
      .should('not.be.empty');

    cy.get('[data-testid="cypress-about-description-2"')
      .should('exist')
      .should('not.be.empty');

    cy.get('[data-testid="cypress-about-description-3"')
      .should('exist')
      .should('not.be.empty');
  });
});

describe('Learing adventure page complete', () => {
  it('Renderes learning adventure page elements', () => {
    cy.visit('http://localhost:5173/learning');

    cy.get('[data-testid="cypress-title"]')
      .should('exist')
      .should('not.be.empty');
  });
});

describe('Projects page complete', () => {
  it('Renderes projects page elements', () => {
    cy.visit('http://localhost:5173/projects');

    cy.get('[data-testid="cypress-title"]')
      .should('exist')
      .should('not.be.empty');
  });
});

describe('Contact page complete', () => {
  it('Renderes contact page elements', () => {
    cy.visit('http://localhost:5173/contact');

    cy.get('[data-testid="cypress-title"]')
      .should('exist')
      .should('not.be.empty');
  });
});
