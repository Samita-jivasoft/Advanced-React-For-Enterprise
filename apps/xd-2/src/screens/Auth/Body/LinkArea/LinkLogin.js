import React from "react";
import { Link } from "react-router-dom";

export function LinkLogin({ label }) {
	return (

		
			<Link to="/login">{label}</Link>

	);
}
