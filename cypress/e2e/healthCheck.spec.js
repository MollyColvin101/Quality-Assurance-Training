describe('Health Check API', () => {
    it('should return a successful response from the Ping endpoint', () => {
      cy.request({
        method: 'GET',
        url: 'https://restful-booker.herokuapp.com/ping', // Endpoint URL
        failOnStatusCode: false // To handle non-2xx status codes
      }).then((response) => {
        // Check that the response status is 200
        expect(response.status).to.eq(200);
        // Optionally, you can add more checks on the response body if needed
        expect(response.body).to.be.empty; // The body should be empty for a successful health check
      });
    });
  });
  