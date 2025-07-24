const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  coverImageURL: String
});

module.exports = mongoose.model('Book', BookSchema);
