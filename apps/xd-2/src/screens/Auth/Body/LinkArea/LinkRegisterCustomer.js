import React from "react";
import { Link } from "react-router-dom";

export function LinkRegisterCustomer({ label }) {
	return (
			<Link to="/register">{label}</Link>
		
	);
}
