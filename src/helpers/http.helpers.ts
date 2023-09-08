const BASE_URL = import.meta.env.VITE_API_URL;

export async function requestWithoutToken(
	endpoint: string,
	options: RequestInit
) {
	const response = await fetch(`${BASE_URL}/${endpoint}`, {
		...options,
		headers: {
			"content-type": "application/json",
			...options.headers,
		},
	});
	const data = await response.json();
	return data;
}

export async function requestWithToken(endpoint: string, options: RequestInit) {
	const token = localStorage.getItem("token");

	const response = await fetch(`${BASE_URL}/${endpoint}`, {
		...options,
		headers: {
			"content-type": "application/json",
			authorization: `Bearer ${token}`,
			...options.headers,
		},
	});
	const data = await response.json();
	return data;
}
