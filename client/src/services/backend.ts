import axios from "axios";
import config from "../config";

const url = config.api.endpoint;

const backend = axios.create({
    baseURL: url,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        
      },
});

export default backend;

