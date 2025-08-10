const axios = require('axios');

async function deleteReview(isbn) {
    try {
        const response = await axios.delete(`http://localhost:5000/review/${isbn}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

deleteReview('1234567890');
