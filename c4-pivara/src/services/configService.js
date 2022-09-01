import axios from "axios";

const http = axios.create({
    baseURL: process.env.VUE_APP_URL_BASE_API
});

http.interceptors.request.use(
    config => {
        config.headers['token'] = localStorage.getItem('apiToken');
          return config;

      },
      error => {
          return Promise.reject(error);
      }
);

export default http