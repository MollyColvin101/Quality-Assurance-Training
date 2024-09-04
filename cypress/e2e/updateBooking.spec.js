// cypress/integration/updateBooking.spec.js

describe('Update Booking Endpoint', () => {
    let bookingId;
  
    // First, create a booking to be updated
    before(() => {
      const initialBooking = {
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
  
      cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',
        body: initialBooking,
        failOnStatusCode: false
      }).then((response) => {
        bookingId = response.body.bookingid; // Save the booking ID for later use
      });
    });
  
    it('should update the booking and return the updated details', () => {
      // Define the updated booking details
      const updatedBooking = {
        firstname: 'Jane',
        lastname: 'Doe',
        totalprice: 200,
        depositpaid: false,
        bookingdates: {
          checkin: '2024-02-01',
          checkout: '2024-02-10'
        },
        additionalneeds: 'Dinner'
      };
  
      // Perform a PUT request to update the booking
      cy.request({
        method: 'PUT',
        url: `https://restful-booker.herokuapp.com/booking/${bookingId}`, // URL with booking ID
        body: updatedBooking,
        failOnStatusCode: false
      }).then((response) => {
        // Verify that the status code is 200
        expect(response.status).to.eq(200);
  
        // Verify that the response body contains the updated booking details
        expect(response.body).to.have.property('firstname', updatedBooking.firstname);
        expect(response.body).to.have.property('lastname', updatedBooking.lastname);
        expect(response.body).to.have.property('totalprice', updatedBooking.totalprice);
        expect(response.body).to.have.property('depositpaid', updatedBooking.depositpaid);
        expect(response.body.bookingdates).to.deep.equal(updatedBooking.bookingdates);
        expect(response.body).to.have.property('additionalneeds', updatedBooking.additionalneeds);
      });
    });
  });
  