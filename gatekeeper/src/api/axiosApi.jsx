import axios from 'axios'

// Copyright © 2023, Mike Vermeer & Guido Erdtsieck, All rights reserved.

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/',
    withCredentials: true,
});

export default axiosInstance;