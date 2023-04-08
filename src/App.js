import React from 'react';
import Nav from './components/Navigation/Nav';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
        <Router>
            <div>
               <Nav />
            </div>
            <Switch>
                <Route path="/" exact >
                    Home
                </Route>
                <Route path="/news">
                    News
                </Route>
                <Route path="/contact">
                    Contact 123123
                </Route>
                <Route path="/about">
                    About
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="*">
                    404
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
