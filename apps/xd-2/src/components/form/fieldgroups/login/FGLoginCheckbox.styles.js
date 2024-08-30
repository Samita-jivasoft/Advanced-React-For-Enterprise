import styled from "styled-components";
import { PRIMARY_SHADE, PRIMARY_TINT, GREY_950, GREY_400 } from "app/globalStyles";

export const StyledFGLoginCheckbox = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	grid-template-rows: auto;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	align-items: center;
	padding-bottom: 0rem;
	@media (min-width: 768px) {
		padding-bottom: 1rem;
	}

	.checkbox-left {
		padding: 1rem 1rem 0;
	}
	
	label {
		display: block !important;
		width: 100% !important;
		text-transform: capitalize !important;
		position: relative;
		padding-left: 3.5rem;
		margin-bottom: 2rem;
		cursor: pointer;
		font-size: 1.2rem;
		text-transform: inherit;
		vertical-align: middle;
		line-height: 2.5rem;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	input[type="checkbox"] {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
		&:checked ~ .checkmark {
			background-color: ${PRIMARY_TINT};
			&:after {
				display: block;
			}
		}
	}
	.checkmark {
		position: absolute;
		top: 0;
		left: 0;
		height: 25px;
		width: 25px;
		background-color: ${GREY_950};
		border: 1px solid ${PRIMARY_TINT};
		@media (min-width: 768px) {
			background-color: ${GREY_400};
			border: 1px solid ${GREY_400};
		}
		&:after {
			content: "";
			position: absolute;
			display: none;
			left: 6px;
			top: 2px;
			width: 10px;
			height: 15px;
			border: solid white;
			border-width: 0 3px 3px 0;
			-webkit-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			transform: rotate(45deg);
		}
	}			
`;
