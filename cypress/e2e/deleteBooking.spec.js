// cypress/e2e/deleteBooking.spec.js

describe('Delete Booking API', () => {
    let bookingId;
  
    // Create a booking before running the delete test
    before(() => {
      cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',
        body: {
          firstname: 'John',
          lastname: 'Doe',
          totalprice: 123,
          depositpaid: true,
          bookingdates: {
            checkin: '2024-01-01',
            checkout: '2024-01-02'
          },
          additionalneeds: 'Breakfast'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        bookingId = response.body.bookingid; // Save the booking ID
      });
    });
  
    it('should delete a booking successfully', () => {
      cy.request({
        method: 'DELETE',
        url: `https://restful-booker.herokuapp.com/booking/${bookingId}`
      }).then((response) => {
        expect(response.status).to.eq(201); // Successful deletion returns 201 Created
  
        // Verify that the booking is actually deleted
        cy.request({
          method: 'GET',
          url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
          failOnStatusCode: false // We want to check for a 404 status if the booking is deleted
        }).then((getResponse) => {
          expect(getResponse.status).to.eq(404); // The booking should not be found
        });
      });
    });
  });
  