import React, { useState } from "react";
const UserContext = React.createContext({name : "", auth : false});
const UserProvider = ({children}) => {
    
  const [user, setUser] = useState({ name: "", auth: true });

  // Login updates the user data with a name parameter
  const login = (name) => {
    setUser((user) => ({
      name: name,
      auth: true,
    }));
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser((user) => ({
      name: "",
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export{UserContext,UserProvider};
