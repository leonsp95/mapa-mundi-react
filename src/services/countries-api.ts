import axios from 'axios';

const apiCountries = axios.create({
  baseURL: './countries.json'
});

export default apiCountries;
