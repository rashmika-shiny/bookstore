const axios = require('axios');

async function addOrModifyReview(isbn, review) {
    try {
        const response = await axios.put(`http://localhost:5000/review/${isbn}`, {
            review
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

addOrModifyReview('1234567890', 'Excellent book!');
