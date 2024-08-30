import { createGlobalStyle } from "styled-components";
import { PRIMARY_SHADE } from "..";

export const HtmlBody = createGlobalStyle`
	*,
	*:after,
	*:before { box-sizing: inherit; }

	html { box-sizing: border-box; }

	body {
		/* overflow:hidden; */ 
		}
	
`;
