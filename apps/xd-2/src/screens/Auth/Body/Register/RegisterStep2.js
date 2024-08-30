import React from "react";
import { FieldGroup, Label } from "app/common";

export function RegisterStep2() {
	return (
		<div className="Register-step2">
			<FieldGroup>
				<Label htmlFor="username">Username</Label>
				<input type="text" name="username" placeholder="Choose a username" />
			</FieldGroup>
			<FieldGroup>
				<Label htmlFor="password">Password</Label>
				<input
					type="password"
					name="password"
					placeholder="Select a password"
				/>
			</FieldGroup>
			<FieldGroup>
				<Label htmlFor="retypepassword">Retype Password</Label>
				<input
					type="password"
					name="retypepassword"
					placeholder="Retype your password"
				/>
			</FieldGroup>
		</div>
	);
}
