const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: String,
  desc: String,
  category: String,
  price: Number,
  stock: Number,
  url: String,
});

module.exports = mongoose.model('Item', ItemSchema);