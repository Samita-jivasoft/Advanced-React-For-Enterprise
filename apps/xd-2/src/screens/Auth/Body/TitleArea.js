import React from "react";
import {
	IconEdsLogo
} from "app/assets";

import { StyledTitleArea } from "../../styles";

export const AuthMainTitleArea = ({ children }) => {
	return (
		<StyledTitleArea classname="Title-area">
			<IconEdsLogo />
			{children}
		</StyledTitleArea>
	);
};
