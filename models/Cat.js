const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name: String,
  desc: String,
  url: String,
});

module.exports = mongoose.model('Cat',catSchema);