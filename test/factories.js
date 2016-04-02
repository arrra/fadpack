'use strict';

const mongoose = require('mongoose');
const Monky = require('monky');
const monky = new Monky(mongoose);

monky.factory('Product', {
  name: 'Product Name #n',
});

module.exports = monky;
