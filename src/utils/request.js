import axios from "axios";
const Server = axios.create({
  baseURL: process.env.VUE_APP_SERVICE_URL,
  timeout: 3000
});

Server.interceptors.request.use(
  function(config) {
    console.log("请求拦截")
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

Server.interceptors.response.use(
  function(response) {
    console.log("响应拦截")
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default Server;
