const express = require("express");
let books = require("../booksdb.js");
let users = [];

let authenticated = express.Router();

// Task 6: Register new user
authenticated.post("/register", (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.send("User registered successfully");
});

// Task 7: Login user
authenticated.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.send("Login successful");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

// Task 8: Add/Modify review
authenticated.put("/review/:isbn", (req, res) => {
  const { username, review } = req.body;
  if (!books[req.params.isbn]) {
    return res.status(404).send("Book not found");
  }
  books[req.params.isbn].reviews[username] = review;
  res.send("Review added/updated");
});

// Task 9: Delete review
authenticated.delete("/review/:isbn", (req, res) => {
  const { username } = req.body;
  if (!books[req.params.isbn]) {
    return res.status(404).send("Book not found");
  }
  delete books[req.params.isbn].reviews[username];
  res.send("Review deleted");
});

module.exports.authenticated = authenticated;
