import React, { useState } from "react";
const UserContext = React.createContext(null);
const UserProvider = ({children}) => {
    
  const [user, setUser] = useState({ token: "", auth: false, account: {} });

  // Login updates the user data with a name parameter
  const login = (userData) => {
    setUser(userData);
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
