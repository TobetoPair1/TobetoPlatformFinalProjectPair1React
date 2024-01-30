import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:38106/api/',
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = 'token';
  return config;
});

axiosInstance.interceptors.response.use(
  (value) => {
    // response succes işlemleri
    return value;
  },
  (error) => {    
    return error;
  }
);

export default axiosInstance;
