const axios = require('axios');

async function getBookReview(isbn) {
    try {
        const response = await axios.get(`http://localhost:5000/review/${isbn}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getBookReview('1234567890');
