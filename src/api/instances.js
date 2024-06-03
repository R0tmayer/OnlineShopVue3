import axios from 'axios';

const apiRoot = axios.create({
	baseURL: 'http://localhost:5000/',
});

export { apiRoot };
