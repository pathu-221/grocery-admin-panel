export const BASE_URL = import.meta.env.VITE_API_URL;

export async function requestWithoutToken(
	endpoint: string,
	options?: RequestInit
) {
	try {
		const response = await fetch(`${BASE_URL}/${endpoint}`, options);
		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
}

export async function requestWithToken(
	endpoint: string,
	options?: RequestInit
) {
	const token = localStorage.getItem("token");
	try {
		const response = await fetch(`${BASE_URL}/${endpoint}`, {
			...options,
			headers: {
				authorization: `Bearer ${token}`,
				...options?.headers,
			},
		});
		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
}
