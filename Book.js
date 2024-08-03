// models/Book.js ( Defining the models for books, users and transactions ) 
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  availability: Boolean
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
``
