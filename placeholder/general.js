const express = require("express");
let books = require("../booksdb.js");
let general = express.Router();

// Task 1: Get book list
general.get("/books", (req, res) => {
  res.json(books);
});

// Task 2: Get book by ISBN
general.get("/books/isbn/:isbn", (req, res) => {
  res.json(books[req.params.isbn]);
});

// Task 3: Get books by Author
general.get("/books/author/:author", (req, res) => {
  let matches = {};
  for (let isbn in books) {
    if (books[isbn].author === req.params.author) {
      matches[isbn] = books[isbn];
    }
  }
  res.json(matches);
});

// Task 4: Get books by Title
general.get("/books/title/:title", (req, res) => {
  let matches = {};
  for (let isbn in books) {
    if (books[isbn].title === req.params.title) {
      matches[isbn] = books[isbn];
    }
  }
  res.json(matches);
});

// Task 5: Get book reviews
general.get("/books/review/:isbn", (req, res) => {
  res.json(books[req.params.isbn].reviews);
});

module.exports.general = general;
