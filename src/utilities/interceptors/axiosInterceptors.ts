import axios from 'axios';
import { error, log } from 'console';

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
    toastr.error(error);
    return error;
  }
);

export default axiosInstance;
