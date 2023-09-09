import { requestWithToken } from "../helpers/http.helper";

export async function addProduct(formData: any) {
	const response = await requestWithToken(`admin/product`, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(formData),
	});
	return response;
}

export async function fetchAllProducts() {
	const response = await requestWithToken(`admin/product`, {
		method: "GET",
	});
	return response;
}
