import React from "react";

export const FormTag = ({
	children,
	acceptCharset,
	action,
	autocomplete,
	enctyp,
	method,
	name,
	novalidate,
	rel,
	target
}) => {
	return (
		<form
			acceptCharset={acceptCharset}
			action={action}
			autocomplete={autocomplete}
			enctyp={enctyp}
			method={method}
			name={name}
			novalidate={novalidate}
			rel={rel}
			target={target}
		>
			{children}
		</form>
	);
};
