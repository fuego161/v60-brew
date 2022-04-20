export const createCookie = (name: string, value: string, days?: number): void => {
	let expires = '';

	if (days) {
		const date = new Date();

		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

		expires = `; expires=${date.toUTCString()}`;
	}

	document.cookie = `${name}=${value}${expires}; SameSite=None; Secure; path=/`;
};

export const readCookie = (name: string): string | false => {
	const nameEQ = `${name}=`;
	const ca = document.cookie.split(';');

	for (let i = 0; i < ca.length; i += 1) {
		let c = ca[i];

		while (c.charAt(0) === ' ') {
			c = c.substring(1, c.length);
		}

		if (c.indexOf(nameEQ) === 0) {
			return c.substring(nameEQ.length, c.length);
		}
	}

	return false;
};

export const eraseCookie = (name: string): void => {
	createCookie(name, '', -1);
};
