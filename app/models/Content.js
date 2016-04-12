'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
  source: {type: String, required: true},
  product_id: {type: Schema.ObjectId, ref: 'Product', required: true}
});

const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;
