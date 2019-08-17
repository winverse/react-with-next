import axios, { AxiosInstance } from 'axios';

axios.defaults.withCredentials = true;

const baseURL = (() => {
  if (process.env.NODE_ENV === 'development') return 'http://localhost:4000/';
  // TO-do baseUrl setting for production API address
  return '';
})();

const apiClient: AxiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default apiClient;
