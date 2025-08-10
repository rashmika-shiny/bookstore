const axios = require('axios');

async function searchByAuthor(author) {
    try {
        const response = await axios.get(`http://localhost:5000/books/author/${author}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

searchByAuthor('J.K. Rowling');
