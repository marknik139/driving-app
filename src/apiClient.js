import axios from 'axios';
import { API_KEY, BASE_URL } from '@env';

class apiClient {
    constructor() {
        this.instance = axios.create({
            baseURL: BASE_URL,
        });

        this.instance.interceptors.request.use(
            async (config) => {
                config.params = {
                    ...config.params,
                    key: API_KEY,
                };
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    async signIn(email, password) {
        return this.instance.post('/accounts:signInWithPassword', { email, password });
    }

    async register(email, password) {
        return this.instance.post('/accounts:signUp', { email, password });
    }
}

export default new apiClient();