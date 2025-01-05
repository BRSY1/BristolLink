import axios from "axios";

// Create an axios instance with a default config for api requests
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to add the token to the headers before making the request
api.interceptors.request.use((config) => {
  // Try to retrieve the token from localStorage in the browser
  const token = localStorage.getItem("token");
  // If token exists, add it to the headers
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

/* 
e.g.
const response = api.get('/register/', {
    username,
    email,
    password,
});
*/

export default api;
