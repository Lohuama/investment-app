// create_investment_spec.js

describe('Create Investment', () => {
    it('should create a new investment', () => {
      cy.visit('/create-investment');
  
      cy.get('input[name="proprietario"]').type('Lohuama');
      cy.get('input[name="valorInicial"]').type('1000');
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/');
    });
  });
  