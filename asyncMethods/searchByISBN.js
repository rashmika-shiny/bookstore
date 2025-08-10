const axios = require('axios');

function searchByISBN(isbn) {
    axios.get(`http://localhost:5000/books/${isbn}`)
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
}

searchByISBN('1234567890');
