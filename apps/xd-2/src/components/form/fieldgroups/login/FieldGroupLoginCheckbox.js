import React from "react";
import { StyledFGLoginCheckbox } from "./FGLoginCheckbox.styles";
import classNames from "classnames";

export function FieldGroupLoginCheckbox({ classes, children, ...restProps }) {
	return (
		<StyledFGLoginCheckbox
			className={classNames("fieldgroup", classes)}
			{...restProps}
		>
			{children}
		</StyledFGLoginCheckbox>
	);
}
