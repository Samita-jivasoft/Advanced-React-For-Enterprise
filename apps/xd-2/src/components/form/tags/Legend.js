import React from "react";
import { LegendStyled } from "../styles/Legend";

export const Legend = ({ children, htmlFor }) => {
	return <LegendStyled htmlFor={htmlFor}>{children}</LegendStyled>;
};
