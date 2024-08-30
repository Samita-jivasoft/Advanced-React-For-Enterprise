import React from "react";
import { Link } from "react-router-dom";

export function LinkForgotPassword({ label }) {
	return (
			<Link to="/forgot">{label}</Link>
		
	);
}
