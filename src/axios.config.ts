import axios from 'axios'

const token = localStorage.getItem('token')
console.log(token);

const defaultOptions = {
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
};

var axiosInstance = axios.create(defaultOptions);

export default axiosInstance;