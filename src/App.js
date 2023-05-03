import React from "react";
import Nav from "./components/Navigation/Nav";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState, useContext } from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { UserContext } from "./context/UserContext";
import { Audio } from "react-loader-spinner";
import _ from "lodash";
import './App.scss'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const { user } = useContext(UserContext);
  console.log("test context==>", user);
  console.log()
  return (
    <Router>
      {user && user.isLoading ? (
        <div className="loading">
          {" "}
          <Audio type="Audio" color="#00BFFF" height={80} width={80} />
          <div>loading data...</div>
        </div>
      ) : (
        <>
          {user.auth ? <Nav /> : null}
          <AppRoutes />
        </>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </Router>
  );
}

export default App;
