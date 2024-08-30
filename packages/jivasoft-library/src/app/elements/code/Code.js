import React from "react";
import { Pre } from "./Pre";

export const Code = ({ children }) => {
	return (
		<pre>
			<code>{children}</code>
		</pre>
	);
};
