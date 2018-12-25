import axios from 'axios';

const api = axios.create({
  //The initial part of all our backend route URLs
  //(Reduce the repetion between request)
  baseURL:`${process.env.REACT_APP_SERVER_URL}/api`,
  //Allow axios to send the cookies to the backend
  withCredentials: true,
})

export default api;