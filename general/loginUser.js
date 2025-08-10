const axios = require('axios');

async function loginUser(username, password) {
    try {
        const response = await axios.post('http://localhost:5000/login', {
            username,
            password
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

loginUser('newuser', 'password123');
