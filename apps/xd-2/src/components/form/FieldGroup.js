import React from "react";
import { FieldGroupStyled } from "./styles";

// export const FieldGroup = ({ children }) => {
// 	return <div className="fieldgroup">{children}</div>;
// };

export function FieldGroup({children}) {
	return (
		<FieldGroupStyled>
			{children}
		</FieldGroupStyled>
	);
}
