import axios from "axios";
const RegisterNewUser = (username,passoword,phone,email) => {
    return axios.post("http://localhost:8080/api/v1/register", {
        email : email,
        password : passoword,
        username : username,
        phone : phone});
}
export { RegisterNewUser}