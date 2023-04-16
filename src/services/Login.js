import axios from "axios";
const LoginService = async (email, password) => {
    console.log("test")
    return await axios.post("http://localhost:8080/api/v1/login", {
        email: email,
        password: password,
    });
};
export { LoginService};