import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import {useAuth} from 'app/data'
export const PrivateRoute = ({component: Component, authState, ...rest}) => {
	const auth = useAuth()
	return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            auth.authState ?
                <Component {...props} />
            : 	<Route render={() => <Redirect to={{ pathname: "/auth/login" }} />} />


        )} />
    );
};
