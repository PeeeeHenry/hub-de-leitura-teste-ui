/// <reference types="cypress"/>

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('register.html');
    });

    it('Deve preencher formulário de cadastro com sucesso', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Pedro Alcantara')
        cy.get('#email').type(email)
        cy.get('#phone').type('11999999999')
        cy.get('#password').type('Senha@123')
        cy.get('#confirm-password').type('Senha@123')
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
    });

        
});