import axios from './apiClient';

export const getHello = () => axios.get('/api/v2/check');
