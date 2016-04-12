'use strict';

const env = process.env.NODE_ENV || 'development';
const mongoose = require('mongoose');

const name = `fadpack-${env}`;
const uri = `mongodb://localhost/${name}`;

// Register all models
require('./models/Product');

mongoose.connect(uri);

module.exports = {
  uri,
  name,
};
