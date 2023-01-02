import axios from 'axios';

const api = axios.create({
    baseURL: 'https://3gykmp.deta.dev/'
});

export default api;