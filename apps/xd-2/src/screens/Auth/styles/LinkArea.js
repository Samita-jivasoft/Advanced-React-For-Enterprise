import styled from "styled-components";
import { PRIMARY_COLOR, SECONDARY_COLOR, COLOR_WHITE } from "app/globalStyles";

export const StyledLinksArea = styled.div`
	margin: 1rem;
	text-align:center;
	width:100%;
	// @media (min-width: 768px) {
	// 	margin-bottom: 1.5rem;
	// }
	
			// margin: 0rem 0rem 0rem 0rem;
			// padding: 0rem 0rem 0rem 0rem;
			// @media (min-width: 768px) {
			// 	margin: 0rem 2rem 0rem 2rem;
			// }
			a {
				// font-size: 1.4rem;
				font-weight: bold;
				// @media (min-width: 768px) {
				// 	font-size: 1rem;
				// }
				color: ${SECONDARY_COLOR} !important;
				&:hover {
					color: ${COLOR_WHITE} !important;
					@media (min-width: 768px) {
						color: ${PRIMARY_COLOR} !important;
					}
				}
			}
`;
