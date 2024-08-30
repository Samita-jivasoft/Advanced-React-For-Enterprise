import React, { useContext } from "react";
import { Route, Redirect, Navigate } from "react-router-dom";
// import { useAuth } from "app/data";

// export const PublicRoute = ({ component: Component, restricted, authState, ...rest }) => {
	// const auth = useAuth();
	//AUTH.TOKEN && RESTRRICTD

	export function PublicRoute({ children }) {
		// const auth = useAuth();
		return true ? children : <Navigate to="/auth/login" />;
	  }
	  
// 	return (
// 		<Route
// 			{...rest}
// 			render={props =>
// 				null && restricted ? (
// 					<Route render={() => <Navigate to="/auth/login"  />} />

// 				) : (
// 					<Component {...props} />
// 				)
// 			}
// 		/>
// 	);
// };
