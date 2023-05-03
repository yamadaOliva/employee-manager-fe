import React, { useState, useEffect } from "react";
import { getAccount } from "../services/UsersService";
import { set } from "lodash";
const UserContext = React.createContext(null);
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ token: "", auth: false, account: {},isLoading:true });
  const defaultContext = { token: "", auth: false, account: {},isLoading:false };
  // Login updates the user data with a name parameter
  const login = (userData) => {
    setUser({...userData,isLoading:false});
  };
  //get data
  const getData = async () => {
    let response = await getAccount();
    console.log("test response =>>",response.data.DT);
   
    let data = {
      auth:true,
      token:response.data.DT.access_token,
      account:{
          email:response.data.DT.email,
          roles:response.data.DT.roles
      },
      isLoading:false
    }
    setTimeout(() => {
      setUser(data);
    }, 3*1000)
   
  };
  // Logout updates the user data to default
  const logout = () => {
    setUser(defaultContext);
  };
  useEffect(() => {
    console.log("test path name =>>",window.location.pathname);
    if(window.location.pathname != "/login" && window.location.pathname != "/register"&&window.location.pathname != "/") getData();
    else setUser(defaultContext);
  }, []);
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
