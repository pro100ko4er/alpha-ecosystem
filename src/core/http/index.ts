import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.artic.edu/api/v1',
     
})

export default api