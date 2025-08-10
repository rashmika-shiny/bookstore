const axios = require("axios");

// Task 10: Get all books – async/await
async function getAllBooks() {
  let res = await axios.get("http://localhost:5000/books");
  console.log("All Books:", res.data);
}

// Task 11: Search by ISBN – promises
function getBookByISBN(isbn) {
  axios.get(`http://localhost:5000/books/isbn/${isbn}`)
    .then(res => console.log(`Book with ISBN ${isbn}:`, res.data))
    .catch(err => console.error(err));
}

// Task 12: Search by Author
async function getByAuthor(author) {
  let res = await axios.get(`http://localhost:5000/books/author/${author}`);
  console.log(`Books by ${author}:`, res.data);
}

// Task 13: Search by Title
async function getByTitle(title) {
  let res = await axios.get(`http://localhost:5000/books/title/${title}`);
  console.log(`Books titled "${title}":`, res.data);
}

// Run examples:
(async () => {
  await getAllBooks();
  getBookByISBN("12345");
  await getByAuthor("Author A");
  await getByTitle("Book One");
})();
