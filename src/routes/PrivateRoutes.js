import { Route } from "react-router-dom";
import { useEffect } from "react";
import _ from 'lodash';
import { useHistory } from "react-router-dom";
const PrivateRoutes = (props) => {
   const history = useHistory();
    useEffect(() => {
        let session = sessionStorage.getItem('user');
        if(_.isEmpty(session)){
            history.push('/login');
        }
    }, []);
    return (
        <Route path={props.path} component={props.component}/>
    );
};
export default PrivateRoutes;