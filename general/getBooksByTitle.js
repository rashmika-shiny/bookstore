const axios = require('axios');

async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`http://localhost:5000/books/title/${title}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getBooksByTitle('Harry Potter');
