import axios from "axios";

import store from "@/store"
const http = axios.create({
    baseURL: process.env.VUE_APP_URL_BASE_API
});

http.interceptors.request.use(
    config => {
        config.headers['token'] = store.getters.getToken;
          return config;

      },
      error => {
          return Promise.reject(error);
      }
);

export default http