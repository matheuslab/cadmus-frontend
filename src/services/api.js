import axios from 'axios';

const api = axios.create({
  // If you want to run locally, please use http://localhost:3333
  baseURL: 'https://cadmus-backend.herokuapp.com/',
});

export default api;
