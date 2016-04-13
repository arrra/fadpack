'use strict';

const Content = require('../models/Content');
const Router = require('express').Router;

const router = Router();

router.post('/', (req, res) => {
  if(!req.body.product_id){
    return res.status(404).send();
  }
  let content = new Content({
    source: req.body.source,
    product_id: req.body.product_id
  });
  content.save((err, content) => {
    if(err) {
      console.log(err, 'err');
      return res.status(500).send();
    }
    res.status(200).send();
  })
})
module.exports = router;
