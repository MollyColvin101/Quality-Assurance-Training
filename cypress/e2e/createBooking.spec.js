describe('Create Booking Endpoint', () => {
    it('should create a new booking and return a 200 status', () => {
      // Define the booking details
      const bookingDetails = {
        firstname: 'John',
        lastname: 'Doe',
        totalprice: 150,
        depositpaid: true,
        bookingdates: {
          checkin: '2024-01-01',
          checkout: '2024-01-10'
        },
        additionalneeds: 'Breakfast'
      };
  
      // Perform a POST request to create a booking
      cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking', // URL for the Create Booking endpoint
        body: bookingDetails,
        failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status codes
      }).then((response) => {
        // Verify that the status code is 200
        expect(response.status).to.eq(200);
  
        // Verify that the response body contains the booking details
        expect(response.body).to.have.property('bookingid');
        expect(response.body.booking).to.deep.equal(bookingDetails);
      });
    });
  });