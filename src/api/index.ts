import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

const api = axios.create({
  baseURL: '/server',
  withCredentials: true,
});

api.interceptors.response.use(response => {
  if (response.data) {
    response.data = camelcaseKeys(response.data, { deep: true });
  }
  return response;
});

export default api;
