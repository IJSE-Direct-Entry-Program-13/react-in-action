import axios from "axios";

const HttpClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        "Content-Type": 'application/json'
    }
});

export {HttpClient as http};