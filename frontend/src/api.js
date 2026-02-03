import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api', // Point to your Backend
});

export default api;