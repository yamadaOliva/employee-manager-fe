import axios from "axios";
import { toast } from "react-toastify";
const instance = axios.create({
    baseURL: 'http://localhost:8080'
});
instance.defaults.withCredentials =true;
// instance.interceptors.request.use(function (config) {
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// });

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    const status = error.response ? error.response.status : 500;
    switch (status) {
        case 401:
            toast.error("Unauthorized");
            return Promise.reject(error);
            break;
        case 403:
            toast.error("Forbidden");
            return Promise.reject(error);
            break;
        case 404:
            return Promise.reject(error);
            break;
        case 500:
            return Promise.reject(error);
            break;
        default:
            break;
    }
    return Promise.reject(error);
});
export default instance;