'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  release_date: {
    type: Date,
  },
});

const Product = mongoose.model('Product', schema);

module.exports = Product;
