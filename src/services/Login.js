import axios from "../setup/axios";
const LoginService = async (email, password) => {
    console.log("test")
    return await axios.post("/api/v1/login", {
        email: email,
        password: password,
    });
};
export { LoginService};