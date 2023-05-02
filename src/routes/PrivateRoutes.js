import { Route } from "react-router-dom";
import { useEffect,useContext } from "react";
import _ from 'lodash';
import { useHistory, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const PrivateRoutes = (props) => {
   const history = useHistory();
   const {user} = useContext(UserContext);  
    useEffect(() => {
       
    }, []);
    if(user  && user.auth){
    return (
        <>
        <Route path={props.path} component={props.component}/>
        </>
    );
    }else{
        return <Redirect to="/login" />;
    }
};
export default PrivateRoutes;