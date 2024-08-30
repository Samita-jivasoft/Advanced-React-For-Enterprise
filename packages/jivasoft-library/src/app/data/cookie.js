import Cookies from "universal-cookie";
export const cookies = new Cookies();

export const saveToCookie = (name, data) => {
	if (!window || !window.localStorage) {
		return;
	}

	window.localStorage.setItem(name, JSON.stringify(data));
};

export const getFromStorage = name => {
	if (!window || !window.localStorage) {
		return null;
	}

	try {
		return JSON.parse(window.localStorage.getItem(name));
	} catch (e) {
		console.error(e);

		return null;
	}
};
