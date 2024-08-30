import { createGlobalStyle } from "styled-components";

export const ListStyles = createGlobalStyle`
	ul, ol, dl {
		/* margin-bottom: 2.5rem; */
		margin: 0rem 0rem 0rem 2.0rem;
		padding: 0rem 0rem 0rem 0rem;
		list-style: none;
		&.circle-bullets {
			list-style: circle inside;
		}
		li {
			margin-bottom: 1.0rem;
		}
		ul {
			font-size: 90%;
			margin: 1.5rem 0rem 0rem 3.0rem;
		}
	}
	ol {
		/* margin-bottom: 2.5rem; */
		list-style: decimal inside;
	}
	dl {
		/* margin-bottom: 2.5rem; */
		dt {	
			margin-bottom: 1rem;
			dd {
				margin-bottom: 1rem;
			}
		}
	}
`;
