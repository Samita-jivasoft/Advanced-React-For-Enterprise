import React from "react";
import styled from "styled-components";

export const ULCircles = ({ children }) => {
	return <StyledULCircles>{children}</StyledULCircles>;
};

const StyledULCircles = styled.ul`
	list-style: circle inside;
`;
