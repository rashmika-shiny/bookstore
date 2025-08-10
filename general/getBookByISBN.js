const axios = require('axios');

async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`http://localhost:5000/books/${isbn}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getBookByISBN('1234567890');
