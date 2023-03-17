const mongoose = require('mongoose');
const catSchema = require('./Cat');

const itemSchema = new mongoose.Schema({
  name: String,
  desc: String,
  cat: catSchema,
  price: Number,
  stock: Number,
  url: String,
});

module.exports = mongoose.model('Item', itemSchema);