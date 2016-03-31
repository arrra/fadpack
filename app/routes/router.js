'use strict';

const products = require('./products');

module.exports = function(app) {
  app.use('/products', products);
};
