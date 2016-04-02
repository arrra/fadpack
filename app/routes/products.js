'use strict';

const Product = require('../models/Product');
const Router = require('express').Router;

const router = Router();

router.get('/', (req, res) => {
  Product.find((err, products) => {
    if (err) {
      console.error(err);
      res.status(404).send(err);
      return;
    }

    res.json({ products: products });
  });
});

router.post('/', (req, res) => {
	let product = new Product(req.body);
	product.save((err, product) => {
		if (err) {
			console.error(err);
			res.status(404).send(err);
			return;
		}

    res.status(200).send();
	});
});
module.exports = router;
