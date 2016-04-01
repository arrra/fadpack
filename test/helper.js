'use strict';

const dbURI = 'mongodb://localhost/fadpack-test';

const chai = require('chai');
const mongoose = require('mongoose');

global.clearDB = require('mocha-mongoose')(dbURI);
global.expect = chai.expect;

chai.use(require('chai-as-promised'));

beforeEach(function(done) {
  if (mongoose.connection.db) {
    return done();
  }

  mongoose.connect(dbURI, done);
});
