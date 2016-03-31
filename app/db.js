'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fadpack');

module.exports = mongoose;
