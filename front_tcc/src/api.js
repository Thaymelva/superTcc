import react from 'react';
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3308"
});

export default api;
