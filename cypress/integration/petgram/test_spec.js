
describe('Petgram', () => {
  it('Para ver si la app funciona', () => {
    cy.visit('/');
  });

  it('Navegar a una categoría para ver fotos', () => {
    cy.visit('/pet/1');
    cy.get('article');
  });

  it('Si podemos navegar con la navbar a la home', () => {
    cy.visit('/pet/1');
    cy.get('nav a').first().click();
    cy.url().should('include', '/');
  });

  it('Los usuarios no registrados ven el inicio de sesión al ir a favs', () => {
    cy.visit('/favs');
    cy.url().should('include', '/login');
    cy.get('form').should('have.length', '2');
  });

});

