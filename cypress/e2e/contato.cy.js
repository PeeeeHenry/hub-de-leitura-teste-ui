describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('index.html');
  });

  it('Deve preencher formulário de contato com sucesso', () => {
    cy.get('[name="name"]').type('Pedro Alcantara');
    cy.get('[name="email"]').type('pedro@example.com');
    cy.get('[name="subject"]').select('Sugestões');
    cy.get('[name="message"]').type('Mensagem de teste');
    cy.get('#btn-submit').click();
    cy.contains('Contato enviado com sucesso!').should('exist');
  });

  it('Deve validar mensagem de erro ao enviar sem preencher nome', () => {
    cy.get('[name="email"]').type('pedro@example.com');
    cy.get('[name="subject"]').select('Sugestões');
    cy.get('[name="message"]').type('Mensagem de teste');
    cy.get('#btn-submit').click();
    cy.contains('Por favor, preencha o campo Nome.').should('exist');
  });

  it('Deve validar mensagem de erro ao enviar sem preencher email', () => {
    cy.get('[name="name"]').type('Pedro Alcantara');
    cy.get('[name="subject"]').select('Sugestões');
    cy.get('[name="message"]').type('Mensagem de teste');
    cy.get('#btn-submit').click();
    cy.contains('Por favor, preencha o campo E-mail.').should('exist');
  });

  it('Deve validar mensagem de erro ao enviar sem selecionar o assunto', () => {
    cy.get('[name="name"]').type('Pedro Alcantara');
    cy.get('[name="email"]').type('pedro@example.com');
    cy.get('[name="message"]').type('Mensagem de teste');
    cy.get('#btn-submit').click();
    cy.contains('Por favor, selecione o Assunto.').should('exist');
  });

  it('Deve validar mensagem de erro ao enviar sem preencher mensagem', () => {
    cy.get('[name="name"]').type('Pedro Alcantara');
    cy.get('[name="email"]').type('pedro@example.com');
    cy.get('[name="subject"]').select('Sugestões');
    cy.get('#btn-submit').click();
    cy.contains('Por favor, escreva sua Mensagem').should('exist');
  });
});