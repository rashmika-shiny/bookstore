const axios = require('axios');

async function registerUser(username, password) {
    try {
        const response = await axios.post('http://localhost:5000/register', {
            username,
            password
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

registerUser('newuser', 'password123');
