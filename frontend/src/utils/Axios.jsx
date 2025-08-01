import axios  from './axios';
const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com', // ✅ Replace with your backend URL
});

export default axiosInstance;