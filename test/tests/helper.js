'use strict';

process.env.NODE_ENV = 'test';

const app = require('../../app');
const chai = require('chai');
const db = require('../../app/db');
const mongoose = require('mongoose');
const request = require('supertest');

global.expect = chai.expect;
chai.use(require('chai-as-promised'));

const clearDB = require('mocha-mongoose')(db.uri);

// shared between hooks
let server;

before(function(done){
  server = app.listen(5000, function() {
    global.request = request(app);
    global.monky = require('../factories');
    done();
  });
});

after(function(done){
  mongoose.models = {}
  mongoose.modelSchemas = {}
  mongoose.disconnect(function(){
    server.close(done);
  });
});

beforeEach(function(done) {
  clearDB(done);
});
