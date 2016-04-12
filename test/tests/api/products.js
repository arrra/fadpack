'use strict';

describe('Product requests', function() {
  describe('GET /products', function() {
    let data;

    beforeEach(function(done) {
      monky.createList('Product', 5, function(err) {
        if (err) return done(err);
        request
          .get('/products')
          .expect('Content-Type', /json/)
          .end(function(err, res) {
            data = res.body;
            done(err);
          });
      });
    });

    it('responds with all products', function() {
      const products = data.products;
      expect(products).to.have.lengthOf(5);
    });
  });
});
