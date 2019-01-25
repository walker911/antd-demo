import axios from 'axios';

const api = "http://localhost:9090";

export const login = (body) => 
    axios.post(`${api}/api/v1/user/login`, body)