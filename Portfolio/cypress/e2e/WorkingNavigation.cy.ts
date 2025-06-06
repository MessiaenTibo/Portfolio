describe('All navigation routes', () => {
  const routes = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Learn', path: '/learn' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  const clickNavLink = (label: string) => {
    if (label === 'Home') {
      // Update this selector based on how your site links to home
      cy.get('[data-testid="cypress-nav-home"]').click();
    } else {
      cy.contains(label).click();
    }
  };

  routes.forEach((fromRoute) => {
    it(`Navigates from ${fromRoute.label} to every other page`, () => {
      cy.visit(`${fromRoute.path}`);

      routes.forEach((toRoute) => {
        if (fromRoute.path === toRoute.path) return;

        clickNavLink(toRoute.label);
        cy.url().should('include', toRoute.path);

        // Return to original page
        cy.visit(`${fromRoute.path}`);
      });
    });
  });
});
