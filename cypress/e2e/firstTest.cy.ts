describe('Login', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/login')
  }) 

  it('should display the login form', () => {
    cy.get('[data-testid="cypress-title"]').should('exist');
    cy.get('#mail').should('exist');
    cy.get('#password').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });


  it('should show an error for invalid login credentials', () => {
    cy.get('#mail').type('invalid@mail.com');
    cy.get('#password').type('invalidpassword');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('mauvais mot de passe ou mauvais mail où compte non valide');
    });
  });

  it('should redirect to profile page for valid login credentials', () => {
    const validMail = 'amir@amir';
    const validPassword = 'amir12345';

    cy.get('#mail').type(validMail);
    cy.get('#password').type(validPassword);
    cy.get('button[type="submit"]').click();



    cy.window().then((win) => {
      const token = win.localStorage.getItem('token');
      cy.wait(2000);
      console.log('Token:', token);
      expect(token).to.exist;
    });


    cy.url().should('include', '/profil');
  });


})



describe('get hotels', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should fetch hotels', () => {
    cy.get('[data-testid="cypress-hotels"]', { timeout: 10000 }).should('exist');

  });



})


describe('Book a Room', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/hostel/book/1');
  });

  it('should successfully book a room', () => {
    const checkIn = '10-09-2024';
    const checkOut = '13-09-2024';
    cy.get('#checkIn').type(checkIn);
    cy.get('#checkOut').type(checkOut);

    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('reservation succed date : 2024-04-01 , 2024-04-05');
    });

  });

});
