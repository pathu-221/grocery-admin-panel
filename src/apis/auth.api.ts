import { requestWithToken, requestWithoutToken } from "../helpers/http.helper";

export async function login(formData: any) {
	const data = await requestWithoutToken("admin/auth/login", {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(formData),
	});
	return data;
}
export async function authenticate() {
	const data = await requestWithToken("admin/auth", {
		method: "GET",
	});
	return data;
}


