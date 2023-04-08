
import "./Register.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
export default function Register(props) {
    const history = useHistory();
    const handleRegister = () => {
        history.push("/login");
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
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Confirm Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleName">User Name</label>
                            <input type="text" className="form-control" id="exampleName" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <label for="examplePhone">Phone Number</label>
                            <input type="text" className="form-control" id="examplePhone" placeholder="Phone"/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        
                        <button className="btn btn-primary">Submit</button>
                        <span className="text-center">
                            <a className="forgot-passoword" href="#">Forgot password?</a>
                        </span>
                        <hr/>
                        <div className="text-center" >
                            
                                <button className="btn btn-success"
                                        onClick={()=>handleRegister()}
                                >Login</button>
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}