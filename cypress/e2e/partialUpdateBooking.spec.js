// cypress/e2e/partialUpdateBooking.spec.js

describe('Partial Update Booking API', () => {
    let bookingId;
  
    // Create a booking before running the partial update test
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
  
    it('should partially update a booking successfully', () => {
      cy.request({
        method: 'PATCH',
        url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
        body: {
          firstname: 'Jane', // Updating only the firstname
          additionalneeds: 'Dinner'
        }
      }).then((response) => {
        expect(response.status).to.eq(200); // Verify that the response status is OK
        
        // Verify the booking was updated correctly
        cy.request({
          method: 'GET',
          url: `https://restful-booker.herokuapp.com/booking/${bookingId}`
        }).then((getResponse) => {
          expect(getResponse.status).to.eq(200);
          expect(getResponse.body.firstname).to.eq('Jane'); // Check updated field
          expect(getResponse.body.additionalneeds).to.eq('Dinner'); // Check updated field
        });
      });
    });
  });
  