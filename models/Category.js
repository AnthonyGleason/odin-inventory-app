const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: String,
  desc: String,
  url: String
})

module.exports = new mongoose.model('Category',CategorySchema);