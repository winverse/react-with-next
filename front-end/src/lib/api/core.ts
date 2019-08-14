import axios from './apiClient';

export const getHello = () => axios.get('/api/v1/check');
