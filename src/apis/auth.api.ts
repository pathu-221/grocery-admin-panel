import { requestWithToken, requestWithoutToken } from "../helpers/http.helpers";

export async function login(formData: any) {
	const data = await requestWithoutToken("auth/login", {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(formData),
	});
	return data;
}
export async function authenticate() {
	const data = await requestWithToken("auth", {
		method: "GET",
	});
	return data;
}
