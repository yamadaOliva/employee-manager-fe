import axios from "axios";
const LoginService = (email, password) => {
    return axios.post("http://localhost:8080/api/v1/login", {
        email: email,
        password: password,
    });
};
export { LoginService};