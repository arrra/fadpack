'use strict';

const Product = require('../../../app/models/Product');

describe('Product model', function() {
  describe('validation', function() {
    let product;

    context('without a name', function() {
      beforeEach(function() {
        product = new Product({});
      });

      it('should fail', function() {
        return expect(product.validate()).to.be.rejected;
      });
    });
  });
});
