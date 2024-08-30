import React from "react";

export const Blockquote = ({ children }) => {
	return (
		<blockquote>
			<q>{children}</q>
			<cite>Mario Mecaroni</cite>
		</blockquote>
	);
};
