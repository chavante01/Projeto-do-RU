import axios from 'axios';

const api = axios.create({
    baseURL:'https://18.206.54.38:3005' 
});

export default api;