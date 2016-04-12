'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
  source: {type: String},
  product_id: {type: Schema.ObjectId}
});

const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;
