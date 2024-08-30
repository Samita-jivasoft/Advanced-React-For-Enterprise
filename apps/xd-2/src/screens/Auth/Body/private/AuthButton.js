import React from "react";
import { fakeAuth } from "./FakeAuth";
import { AuthSignOut } from "./AuthSignOut";
import { AuthNotLoggedInMsg } from "./AuthNotLoggedInMsg";
import { useHistory } from "react-router-dom";

export function AuthButton() {
	let history = useHistory();

	return fakeAuth.isAuthenticated ? <AuthSignOut /> : <AuthNotLoggedInMsg />;
}
