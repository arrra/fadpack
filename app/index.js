'use strict';

const db = require('./db');
const express = require('express');
const router = require('./routes/router');

const app = express();

router(app);

app.listen(3000);

module.exports = app;
