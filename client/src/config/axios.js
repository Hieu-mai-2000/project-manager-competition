import axios from 'axios';
import queryString from 'query-string';

const baseURL =
  (process.env.REACT_APP_API
    ? process.env.REACT_APP_API
    : 'https://60fb691891156a0017b4c801.mockapi.io') + '/api';

const axiosClient = axios.create({
  baseURL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  if (getToken()) config.headers['auth-token'] = getToken();

  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  },
);
export default axiosClient;

function getToken() {
  const tokenForUser = localStorage.getItem('user');
  return tokenForUser;
}