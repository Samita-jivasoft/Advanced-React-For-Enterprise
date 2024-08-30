import React from "react";
import { StyledMessageArea } from "../../styles";

export const AuthMainMessageArea = ({ children }) => {
	return (
		<StyledMessageArea classname="Message-area">{children}</StyledMessageArea>
	);
};
