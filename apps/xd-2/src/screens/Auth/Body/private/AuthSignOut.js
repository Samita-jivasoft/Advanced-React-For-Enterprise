import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fakeAuth } from "./FakeAuth";

export function AuthSignOut() {
	const [loading, setLoading] = useState("");
	let history = useHistory();
	return (
		<p>
			Welcome!{" "}
			<button
				onClick={() => {
					setLoading("You are being logged out...");
					fakeAuth.signout(() => history.push("/workspace/auth"));
				}}
			>
				Sign out
			</button>
			{loading}
		</p>
	);
}
