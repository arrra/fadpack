'use strict';

const Content = require('../models/Content');
const Router = require('express').Router;

const router = Router();

router.post('/', (req, res) => {
  if(!req.body.productId){
    res.status(404).send();
  }
  let content = new Content({link: req.body.source, source: req.body.source});
  content.save((err, content) => {
    if(err) {
      console.log(err, 'err');
      return err;
    }
    res.status(200).send();
  })
})
module.exports = router;
