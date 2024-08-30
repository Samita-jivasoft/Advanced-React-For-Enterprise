import { PRIMARY_COLOR } from "app/theme/theme";
import { createGlobalStyle } from "styled-components";

export const BlockquoteStyles = createGlobalStyle`
		blockquote {
			/* margin-bottom: 2.5rem; */
			margin: 0rem 0rem 1.5rem 0rem;
			padding: 1rem 1.5rem;
			border-left: 0.3rem solid ${PRIMARY_COLOR};
			*:last-child {
				margin-bottom: 0;
			}
			/* background: red; */
		}
		q {
			display: block;
			margin-bottom: 0.5rem;
		}
		cite {
			
		}
`;
