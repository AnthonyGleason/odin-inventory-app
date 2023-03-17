const mongoose = require('mongoose');
const {catSchema} = require('./Cat');

const itemSchema = new mongoose.Schema({
  name: String,
  desc: String,
  cat: catSchema,
  price: Number,
  stock: Number,
  url: String,
});
const itemModel = mongoose.model('Item', itemSchema);
module.exports = {itemModel};