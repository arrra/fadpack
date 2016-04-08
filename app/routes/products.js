'use strict';

const Product = require('../models/Product');
const Content = require('../models/Content');
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
  Product.findOneAndUpdate({name: req.body.name},{name: req.body.name},{upsert:true, new: true},(err, product) => {
    if (err) {
      console.error(err);
      res.status(404).send(err);
      return;
    }
    Content.findOneAndUpdate({link: req.body.content_link},{link: req.body.content_link, $push: {products: product._id}},{upsert: true, new: true},(err, content) => {
      if (err) {
        console.error(err);
        res.status(404).send(err);
        return;
      }
    })
    res.status(200).send();
  })
});
module.exports = router;
