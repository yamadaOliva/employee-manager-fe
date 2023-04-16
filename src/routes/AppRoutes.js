import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from '../components/Login/Login'
import Register from '../components/Register/Register';
import { Users } from "../components/User/Users";
import PrivateRoutes from "./PrivateRoutes";
const AppRoutes = (props) => {
    return (
        <>
        <Switch>
                <Route path="/" exact >
                    Home
                </Route>
                <Route path="/project">
                    Contact 123123
                </Route>
                <PrivateRoutes path="/users" component={Users} />
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
        </>
    );
};
export{AppRoutes};