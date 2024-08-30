import React from "react";
import { IconAngleDoubleRight } from "app/assets";

export function RegisterButtonNext({ handleNextStep }) {
	return (
		<button className="button-outline alt" onClick={e => handleNextStep(e)}>
			<span className="right">
				Next <IconAngleDoubleRight />
			</span>
		</button>
	);
}
