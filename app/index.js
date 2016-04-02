'use strict';

const db = require('./db');
const express = require('express');
const router = require('./routes/router');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.listen(3000);

module.exports = app;
