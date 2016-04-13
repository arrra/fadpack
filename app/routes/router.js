'use strict';

const products = require('./products');
const contents = require('./contents');

module.exports = function(app) {
  app.use('/products', products);
  app.use('/contents', contents);
};
