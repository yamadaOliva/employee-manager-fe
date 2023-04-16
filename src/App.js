import React from 'react';
import Nav from './components/Navigation/Nav';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect,useState } from 'react';
import { AppRoutes } from './routes/AppRoutes';
import _ from 'lodash';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
    const [user, setUser] = useState({});
    useEffect(() => {
        let session = sessionStorage.getItem('user');
        if(!_.isEmpty(session)){
            setUser(JSON.parse(session));
        }
    }, []);
  return (
        <Router>
            <div>
               <Nav />
            </div>
            <AppRoutes />
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
