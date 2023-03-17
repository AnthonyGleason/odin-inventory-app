const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name: String,
  desc: String,
  url: String,
});
const catModel = mongoose.model('Cat',catSchema);
module.exports = {catSchema,catModel};