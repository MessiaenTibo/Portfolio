describe('Contact form working', () => {
  it('Check if form gives an error with empty fields', () => {
    cy.visit('/contact');

    // Try submitting the form with empty fields
    cy.contains('Submit').click();

    // Confirm validation is blocking submission
    cy.get('#firstname:invalid').should('exist');
    cy.get('#lastname:invalid').should('exist');
    cy.get('#email:invalid').should('exist');
  });

  it('Submits the form successfully with valid input', () => {
    cy.visit('/contact');

    // Stub the window.confirm dialog to auto-accept
    cy.window().then((win) => {
      cy.stub(win, 'confirm').returns(true);
    });

    // Fill in the form
    cy.get('#firstname').type('John');
    cy.get('#lastname').type('Doe');
    cy.get('#email').type('john.doe@example.com');
    cy.get('#subject').type('Test Subject');
    cy.get('#message').type('This is a test message.');

    // Submit the form
    cy.contains('Submit').click();
  });
});
