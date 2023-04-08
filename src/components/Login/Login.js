
import "./Login.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
export default function Login(props) {
    const history = useHistory();
    const handleRegister = () => {
        history.push("/register");
    }
    return (
        <div className="login-containers mt-5">
            <div className="container">    
                <div className="row">
                    <div className="content-left col-7 py-5">
                        <div className="text-logo">
                            LOGO
                        </div>
                        <div>
                            <h1 >Welcome back!</h1>
                        </div>
                    </div>
                    <div className="content-right col-5  d-flex flex-column py-3 gap-3 shadow-lg">
                        <input type="email" className="form-control" placeholder="Email"/>
                        <input type="password" className="form-control" placeholder="Password"/>
                        <button className="btn btn-primary">Submit</button>
                        <span className="text-center">
                            <a className="forgot-passoword" href="#">Forgot password?</a>
                        </span>
                        <hr/>
                        <div className="text-center" >
                            
                                <button className="btn btn-success"
                                        onClick={()=>handleRegister()}
                                >Sign up</button>
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}