export const fakeAuth = {
	isAuthenticated: false,
	loadingMessage: '',
	authenticate(e) {
		fakeAuth.isAuthenticated = true;
		setTimeout(e, 100); // fake async
	},
	signout(e) {
		fakeAuth.isAuthenticated = false;
		setTimeout(e, 3000); // fake async
	}
};
