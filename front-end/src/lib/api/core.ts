import axios from './apiClient';

export const getApiTest = (): Promise<any> => axios.get('/api/v2/check');
