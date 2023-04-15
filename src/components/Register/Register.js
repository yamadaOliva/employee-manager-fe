
import "./Register.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import {toast} from "react-toastify";
import axios from "axios";
import { RegisterNewUser } from "../../services/Register";
export default function Register(props) {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const defaultDataInput = {
        email : true,
        password : true,
        confirmPassword : true,
        name : true,
        phone : true,
    }
    const [dataInput, setDataInput] = useState(defaultDataInput);

    ///////////////////////////////////////////
    const validataInput = () => {
        if(!email){
            toast.error("Email is required");
            setDataInput({...dataInput, email : false});
            return false;
        }
        if(!password){
            toast.error("Password is required");
            setDataInput({...dataInput, password : false});
            return false;
        }
        if(!confirmPassword){
            toast.error("Confirm password is required");
            setDataInput({...dataInput, confirmPassword : false});
            return false;
        }
        if(!name){
            toast.error("Name is required");
            setDataInput({...dataInput, name : false});
            return false;
        }
        if(!phone){
            toast.error("Phone is required");
            setDataInput({...dataInput, phone : false});
            return false;
        }
        if(password !== confirmPassword){
            toast.error("Password and confirm password not match");
            setDataInput({...dataInput, password : false, confirmPassword : false});
            return false;
        }
        //regex email
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regexEmail.test(email)){
            toast.error("Email is not valid");
            return false;
        }
        //regex phone
        const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
        if(!regexPhone.test(phone)){
            toast.error("Phone is not valid");
            return false;
        }
        return true;

    }
    const handleRegister = async () =>{
        if(validataInput()){
        let respond =  await RegisterNewUser(name, password, phone, email);
        console.log(respond);
        if(+respond.data?.EC === 200){
            toast.success(respond.data?.EM);
            history.push("/login");
        }
        if(+respond.data?.EC === 1){
            toast.error(respond.data?.EM);
        }
        
        }
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setName("");
        setPhone("");
       
        
    }
    const handleLogin= () => {
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
                            <input type="email" className={dataInput.email?"form-control":"form-control is-invalid"} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" 
                            className={dataInput.password?"form-control":"form-control is-invalid"}
                             id="exampleInputPassword1"
                              placeholder="Password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                              />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Confirm Password</label>
                            <input type="password" className={dataInput.confirmPassword?"form-control":"form-control is-invalid"} id="exampleInputPassword1" placeholder="Password"
                                value={confirmPassword}
                                onChange={(e)=>setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleName">User Name</label>
                            <input type="text" className={dataInput.name?"form-control":"form-control is-invalid"} id="exampleName" placeholder="Name"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label for="examplePhone">Phone Number</label>
                            <input type="text" className={dataInput.phone?"form-control":"form-control is-invalid"} 
                            id="examplePhone" placeholder="Phone"
                                value={phone}
                                onChange={(e)=>setPhone(e.target.value)}
                            />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        
                        <button className="btn btn-primary"
                            onClick={()=>handleRegister()}
                        >Submit</button>
                        <span className="text-center">
                            <a className="forgot-passoword" href="#">Forgot password?</a>
                        </span>
                        <hr/>
                        <div className="text-center" >
                            
                                <button className="btn btn-success"
                                        onClick={()=>handleLogin()}
                                >Login</button>
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}