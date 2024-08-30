import React from "react";
import { FieldSetStyled } from "./styles";

// export const FieldGroup = ({ children }) => {
// 	return <div className="fieldgroup">{children}</div>;
// };

export function FieldSet({children}) {
	return (
		<FieldSetStyled>
			{children}
		</FieldSetStyled>
	);
}
