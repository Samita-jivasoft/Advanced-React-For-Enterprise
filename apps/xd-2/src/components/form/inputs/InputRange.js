import React, { useState } from "react";
// import { InputStyled } from "./Inputs.styles";

export function InputRange({ min, max }) {
	const [value, setValue] = useState(0);

	return (
		<>
			<input
				type="range"
				min={min}
				max={max}
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<p>{value}</p>
		</>
	);
}
