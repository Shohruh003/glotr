import axios from 'axios';

class ApiService {
    protected axiosInstance: any;

    protected constructor() {
        this.axiosInstance = axios.create({
            baseURL: import.meta.env.VITE_API_URL,
            withCredentials: true,
        });
    }

    public getAxiosInstance() {
        return this.axiosInstance;
    }
}

export default ApiService;