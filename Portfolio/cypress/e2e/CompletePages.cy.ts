describe('Home page complete', () => {
  it('Renders home page elements', () => {
    cy.visit('/');

    // Title
    cy.get('[data-testid="cypress-title"]')
      .should('exist')
      .should('not.be.empty');

    // Discriptions
    cy.get('[data-testid="cypress-home-description-1"]')
      .should('exist')
      .should('not.be.empty');
    cy.get('[data-testid="cypress-home-description-2"]')
      .should('exist')
      .should('not.be.empty');

    // Download button
    cy.get('[data-testid="cypress-home-download-resume"]')
      .should('exist')
      .should('not.be.empty');

    // Achieved Cards
    cy.get('[data-testid="cypress-home-experience-card"]')
      .should('exist')
      .should('not.be.empty');
    cy.get('[data-testid="cypress-home-projects-card"]')
      .should('exist')
      .should('not.be.empty');

    // Socials
    cy.get('[data-testid="cypress-home-socials-holder"]')
      .should('exist')
      .should('not.be.empty');
    cy.get('[data-testid="cypress-home-sociallink-github"]')
      .should('exist')
      .should('not.be.empty');
    cy.get('[data-testid="cypress-home-sociallink-email"]')
      .should('exist')
      .should('not.be.empty');
    cy.get('[data-testid="cypress-home-sociallink-linkedin"]')
      .should('exist')
      .should('not.be.empty');

    // Ilustration
    cy.get('[data-testid="cypress-programer-ilustration"]')
      .should('exist')
      .should('not.be.empty');
  });
});

describe('About page complete', () => {
  it('Renderes about page elements', () => {
    cy.visit('/about');

    // Titles
    cy.get('[data-testid="cypress-title-1"]')
      .should('exist')
      .should('not.be.empty');
    cy.get('[data-testid="cypress-title-2"]')
      .should('exist')
      .should('not.be.empty');
    cy.get('[data-testid="cypress-title-3"]')
      .should('exist')
      .should('not.be.empty');

    // Discriptions
    cy.get('[data-testid="cypress-about-description-1"]')
      .should('exist')
      .should('not.be.empty');
    cy.get('[data-testid="cypress-about-description-2"]')
      .should('exist')
      .should('not.be.empty');
    cy.get('[data-testid="cypress-about-description-3"]')
      .should('exist')
      .should('not.be.empty');

    // Hobbies
    cy.get('[data-testid="cypress-about-hobbys-holder"]')
      .should('exist')
      .should('not.be.empty');
    cy.get('[data-testid="cypress-about-hobby-1"]')
      .should('exist')
      .should('not.be.empty');
    cy.get('[data-testid="cypress-about-hobby-2"]')
      .should('exist')
      .should('not.be.empty');
    cy.get('[data-testid="cypress-about-hobby-3"]')
      .should('exist')
      .should('not.be.empty');
    cy.get('[data-testid="cypress-about-hobby-4"]')
      .should('exist')
      .should('not.be.empty');

    // Image carousel
    cy.get('[data-testid="cypress-about-image-carousel"]')
      .should('exist')
      .should('not.be.empty');
  });
});

describe('Learing adventure page complete', () => {
  it('Renderes learning adventure page elements', () => {
    cy.visit('/learning');

    // Title
    cy.get('[data-testid="cypress-title"]')
      .should('exist')
      .should('not.be.empty');

    // Seperator line
    cy.get('[data-testid="cypress-seperator-line"]')
      .should('exist')
      .should('not.be.empty');

    // Learning Card
    cy.get('[data-testid="cypress-learning-card"]')
      .should('exist')
      .should('not.be.empty');

    // Scroll arrow
    cy.scrollTo(0, 200);
    cy.get('[data-testid="cypress-scroll-arrow"]')
      .should('exist')
      .should('not.be.empty');
  });
});

describe('Projects page complete', () => {
  it('Renderes projects page elements', () => {
    cy.visit('/projects');

    // Title
    cy.get('[data-testid="cypress-title"]')
      .should('exist')
      .should('not.be.empty');

    // Search bar
    cy.get('[data-testid="search-input"]')
      .should('be.visible')
      .and('have.attr', 'type', 'text')
      .and('have.attr', 'placeholder')
      .and('not.be.empty');

    // Scroll arrow
    cy.scrollTo(0, 200);
    cy.get('[data-testid="cypress-scroll-arrow"]')
      .should('exist')
      .should('not.be.empty');

    // Buttons
    cy.contains('button', 'Clear').should('exist').and('be.visible');
    cy.contains('button', 'Search').should('exist').and('be.visible');

    // Images and videos
    cy.get('img[alt*="Mockup"]').should('exist'); // Any image
    cy.get('video').should('have.length.greaterThan', 0); // Some videos should exist
  });
});

describe('Contact page complete', () => {
  it('Renderes contact page elements', () => {
    cy.visit('/contact');

    // Title
    cy.get('[data-testid="cypress-title"]')
      .should('exist')
      .should('contain.text', 'Contact');

    // Firstname input
    cy.get('input[id="firstname"]')
      .should('exist')
      .should('have.attr', 'placeholder', 'John')
      .should('have.attr', 'required');

    // Lastname input
    cy.get('input[id="lastname"]')
      .should('exist')
      .should('have.attr', 'placeholder', 'Doe')
      .should('have.attr', 'required');

    // Email input
    cy.get('input[id="email"]')
      .should('exist')
      .should('have.attr', 'placeholder', 'John.Doe@email.com')
      .should('have.attr', 'required');

    // Subject input
    cy.get('input[id="subject"]')
      .should('exist')
      .should('not.have.attr', 'required');

    // Message textarea
    cy.get('textarea[id="message"]')
      .should('exist')
      .should('not.have.attr', 'required');

    // Submit button
    cy.get('button[type="submit"]')
      .should('exist')
      .should('contain.text', 'Submit');
  });
});
