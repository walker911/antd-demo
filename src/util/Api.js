import axios from 'axios';

const api = "/api/v1";

export const login = (body) => 
    axios.post(`${api}/user/login`, body, {
        headers: {
            'Authorization': 'Basic YXV0aC1zZXJ2aWNlOjEyMzQ1Ng=='
        }
    })
