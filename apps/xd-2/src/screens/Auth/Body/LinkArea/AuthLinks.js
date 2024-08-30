import React from "react";

import { LinkLogin } from "./LinkLogin";
import { LinkRegister } from "./LinkRegister";
import { LinkForgotPassword } from "./LinkForgotPassword";



import {
	useLocation,
	useNavigate,
	useParams
  } from "react-router-dom";
import { LinkRegisterCustomer } from "./LinkRegisterCustomer";
  
  function withRouter(Component) {
	function ComponentWithRouterProp(props) {
	  let location = useLocation();
	  let navigate = useNavigate();
	  let params = useParams();
	  return (
		<Component
		  {...props}
		  router={{ location, navigate, params }}
		/>
	  );
	}
  
	return ComponentWithRouterProp;
  }

function LinkConditional(props) {
	let location = useLocation();

	if (

		location.pathname === "/login"
	) {
		return (
			<div style={{display:'flex',flexDirection:'column'}}>
				<LinkForgotPassword label="Forgot your password?" />
				<LinkRegisterCustomer label="Register as a New Customer" />

			</div>
		);
	}  else if (location.pathname === "/forgot") {
		return (
			<div style={{display:'flex',flexDirection:'column'}}>
				<LinkLogin label="Login" />
				<LinkRegisterCustomer label="Register as a New Customer" />
			</div>
		);
	} else {
		return null;
	}
}

export const AuthLinks = withRouter(LinkConditional);
