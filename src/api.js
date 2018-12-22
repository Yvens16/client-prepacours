import axios from 'axios';

const api = axios.create({
  //The initial part of all our backend route URLs
  //(Reduce the repetion between request)
  baseURL:"http://localhost:3010/api",
  //Allow axios to send the cookies to the backend
  withCredentials: true,
})

export default api;