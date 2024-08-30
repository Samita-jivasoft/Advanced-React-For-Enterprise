import React, { useState } from "react";
import { Form, Fieldset, Legend, FieldGroup } from "app/common";
import { RegisterButtonNext } from "./RegisterButtonNext";
import { RegisterButtonPrev } from "./RegisterButtonPrev";
import { RegisterStep1 } from "./RegisterStep1";
import { RegisterStep2 } from "./RegisterStep2";

export function Register() {
	const [isNextStep, setIsNextStep] = useState(false);

	const handleNextStep = e => {
		e.preventDefault();
		setIsNextStep(true);
	};

	const handlePrevStep = e => {
		e.preventDefault();
		setIsNextStep(false);
	};

	return (
		<Form>
			<Fieldset>
				<Legend>Register</Legend>

				{isNextStep === false ? <RegisterStep1 /> : <RegisterStep2 />}

				<FieldGroup>
					{isNextStep === true ? (
						<RegisterButtonPrev handlePrevStep={handlePrevStep} />
					) : (
						<RegisterButtonNext handleNextStep={handleNextStep} />
					)}
				</FieldGroup>

				<FieldGroup>
					{isNextStep === true ? (
						<button className="button-secondary">Register</button>
					) : (
						<button disabled>Register</button>
					)}
				</FieldGroup>
			</Fieldset>
		</Form>
	);
}
