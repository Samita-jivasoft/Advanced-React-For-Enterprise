import React from "react";

export const Select = ({ children, id, name }) => {
	return (
		<select id={id} name={name}>
			{children}
		</select>
	);
};
