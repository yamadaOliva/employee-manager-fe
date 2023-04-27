import axios from "../setup/axios";
const RegisterNewUser = (username,passoword,phone,email) => {
    return axios.post("/api/v1/register", {
        email : email,
        password : passoword,
        username : username,
        phone : phone});
}
export { RegisterNewUser}