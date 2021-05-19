it('loads examples', () => {
  const baseUrl : string = 'http://localhost:4200';
  cy.visit(baseUrl);
  cy.contains("Here are some links to help you get started");
});

it('new component test', () => {
  const baseUrl : string = 'http://localhost:4200';
  cy.visit(baseUrl);
  cy.contains("New Component").click();
  cy.get('.terminal > pre').should('contain.text', 'ng generate component xyz');

  cy.contains("Angular Material").click();
  cy.get('.terminal > pre').should('contain.text', 'ng add @angular/material');

  cy.contains("Build for Production").click();
  cy.get('.terminal > pre').should('contain.text', 'ng build --prod');
});