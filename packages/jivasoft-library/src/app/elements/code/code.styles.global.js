import { createGlobalStyle } from "styled-components";
import {
	PRIMARY_COLOR,
	COLOR_BLACK,
	COLOR_WHITE,
	DEFAULT_UI_BORDERRADIUS
} from "app/theme";

export const CodeStyles = createGlobalStyle`
	code {
		margin: 0rem 0.2rem 0rem 0.2rem;
		padding: 0.2rem 0.5rem;
		font-size: 86%;
		white-space: nowrap;
		background: ${COLOR_BLACK};
		/* border-radius: 0.4rem; */
		color: ${COLOR_WHITE};
	}

	pre {
		/* margin-bottom: 2.5rem; */
		margin-bottom: 1.5rem;
		overflow-y: hidden;
		background: ${COLOR_BLACK};
		/* border-left: 0.3rem solid ${PRIMARY_COLOR}; */
			border-radius: ${DEFAULT_UI_BORDERRADIUS};

		& > code {
			display: block;
			padding: 1rem 1.5rem;
			white-space: pre;
			border-radius: ${DEFAULT_UI_BORDERRADIUS};
		}
	}
`;
