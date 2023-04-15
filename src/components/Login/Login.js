import "./Login.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { LoginService } from "../../services/Login";
import axios from "axios";
export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const defaultDataInput = {
    email: true,
    password: true,
  };
  const [dataInput, setDataInput] = useState(defaultDataInput);
  const history = useHistory();
  useEffect(() => {
    axios.get("http://localhost:8080/api/test").then((res) => {
      console.log(res);
    });
  }, []);
  const handleRegister = () => {
    history.push("/register");
  };
  const validationInput = () => {
    if (!email) {
        toast.error("Email is required");
        setDataInput({ ...dataInput, email: false });
        return false;
      }
      //regext email
      const regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexEmail.test(email)) {
        toast.error("Email is not valid");
        setDataInput({ ...dataInput, email: false });
        return false;
      }
      if (!password) {
        toast.error("Password is required");
        setDataInput({ ...dataInput, password: false });
        return false;
      }
      return true;
  }
  const handleLogin =async () => {
   if(validationInput()){
    const res = await LoginService(email, password);
    if(+res.data?.EC==200){
        toast.success("Login success");
        setEmail("");
        setPassword("");
    }
   }
  };
  return (
    <div className="login-containers mt-5">
      <div className="container">
        <div className="row">
          <div className="content-left col-7 py-5">
            <div className="text-logo">LOGO</div>
            <div>
              <h1>Welcome back!</h1>
            </div>
          </div>
          <div className="content-right col-5  d-flex flex-column py-3 gap-3 shadow-lg">
            <input
              type="email"
              className={
                dataInput.email ? "form-control" : "form-control is-invalid"
              }
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className={
                dataInput.password ? "form-control" : "form-control is-invalid"
              }
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary" onClick={() => handleLogin()}>
              Submit
            </button>
            <span className="text-center">
              <a className="forgot-passoword" href="#">
                Forgot password?
              </a>
            </span>
            <hr />
            <div className="text-center">
              <button
                className="btn btn-success"
                onClick={() => handleRegister()}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
