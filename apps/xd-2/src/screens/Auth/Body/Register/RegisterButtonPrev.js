import React from "react";
import { IconAngleDoubleLeft } from "app/assets";

export function RegisterButtonPrev({ handlePrevStep }) {
	return (
		<button className="button-outline alt" onClick={e => handlePrevStep(e)}>
			<span className="left">
				<IconAngleDoubleLeft /> Previous
			</span>
		</button>
	);
}
