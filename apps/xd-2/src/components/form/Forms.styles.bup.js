import styled from "styled-components";
import { PRIMARY_COLOR } from "app/globalStyles";

export const FormStyled = styled.form`
	input[type="email"],
	input[type="number"],
	input[type="password"],
	input[type="search"],
	input[type="tel"],
	input[type="text"],
	input[type="url"],
	textarea,
	select {
		appearance: none; // Removes awkward default styles on some inputs for iOS
		padding: 0.6rem 1rem; // The .6rem vertically centers text on FF, ignored by Webkit
		box-sizing: inherit; // Forced to replace inherit values of the normalize.css
		box-shadow: none;
		width: 100%;
		height: 3.8rem;
		background-color: transparent;
		border: 0.1rem solid ${PRIMARY_COLOR};
		border-radius: 0.4rem;

		&:focus {
			border-color: ${PRIMARY_COLOR};
			outline: 0;
		}
	}

	input[type="checkbox"],
	input[type="radio"] {
		display: inline;
	}
`;

export const FieldsetStyled = styled.fieldset`
	border: 0.1rem solid BLACK;
	padding: 3rem;
`;


export const SelectStyled = styled.select`
	background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="#d1d1d1" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>')
		center right no-repeat;
	padding-right: 3rem;

	&:focus {
		background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="#9b4dca" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>');
	}
`;

export const LegendStyled = styled.legend`
	display: block;
	font-size: 1.6rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
`;

export const LabelStyled = styled.label`
	display: block;
	font-size: 1.6rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
`;

export const InputStyled = styled.input``;

export const TextareaStyled = styled.textarea`
	min-height: 6.5rem;
`;

export const OptgroupStyled = styled.optgroup``;

export const OptionStyled = styled.option``;

export const OutputStyled = styled.output``;
