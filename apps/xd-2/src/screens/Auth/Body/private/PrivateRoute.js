import React from "react";
import { Route, Redirect } from "react-router-dom";
import { fakeAuth } from "./FakeAuth";

export function PrivateRoute({ children, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				fakeAuth.isAuthenticated ? (
					children
				) : (
					<Route render={() => <Redirect to={{ pathname: "/auth/login" }} />} />

				)
			}
		/>
	);
}
