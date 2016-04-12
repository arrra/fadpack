'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
  link: {type: String},
  products: [{type: Schema.ObjectId}]
});

const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;
