import instance from '../http/axios.service';
const axiosApiInstance = instance;

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
    async (config: any) => {
        const ACCESS_TOKEN = localStorage.getItem('token');
        console.log(ACCESS_TOKEN);

        if (ACCESS_TOKEN) {
            config.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
        }
        return config;
    },
    (error: any) => {
        Promise.reject(error);
    }
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
    (response: any) => response,
    (error: any) => {
        console.log(error, 'error');

        /* if (error.response.status === 403 || error.response.status === 401) {
    location.replace(`/login`);
  }*/
        return Promise.reject(error);
    }
);

export default axiosApiInstance;
