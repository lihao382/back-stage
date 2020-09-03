import axios from 'axios'
const Server=axios.create({
  baseURL:"",
  timeout:3000
})

Server.interceptors.request.use(function (config) {
    return config
},function(error){
  return Promise.reject(error)
})

Server.interceptors.response.use(function(config) {
  return config
},function (error) {
  return Promise.reject(error)
})

export default Server