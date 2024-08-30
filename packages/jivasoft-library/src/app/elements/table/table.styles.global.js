import styled, { createGlobalStyle } from "styled-components";
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "app/theme";

export const TableStyles = createGlobalStyle`
	table {
		margin: 0rem auto 1.5rem auto;
		&:last-of-type {
			margin: 0rem auto 0rem auto;
		}
		width: 100%;
		/* border-right: .1rem solid ${SECONDARY_COLOR}; */
		/* border-left: .1rem solid ${SECONDARY_COLOR}; */
		border-spacing: 0;
		/* width: 100%; */ /* width: 85%; */
		tr {
			&:nth-child(odd) {
				background-color: TRANSPARRENT;
			}
			&:nth-child(even) {
				background-color: ${TERTIARY_COLOR};
			}
			td, th {
				padding: 1.2rem 1.5rem;
				text-align: left;
			}
			td {
				border-bottom: 0.1rem solid ${SECONDARY_COLOR};
				/* &:first-child { padding-left: 0; } */
				/* &:last-child  { padding-right: 0; } */
			}
			th {
				color: WHITE;
				font-weight: bold;
				background-color: ${PRIMARY_COLOR};
				border: 0.1rem solid ${PRIMARY_COLOR};
			}
		}

	}
`;

export const StyledTable = styled.table``;

export const StyledCaption = styled.caption``;
export const StyledColgroup = styled.colgroup``;
export const StyledCol = styled.col``;

export const StyledTHead = styled.thead``;
export const StyledTBody = styled.tbody``;
export const StyledTFoot = styled.tfoot``;

export const StyledTR = styled.tr``;

export const StyledTD = styled.td``;

export const StyledTH = styled.th``;
