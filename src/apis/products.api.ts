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

export async function editProduct(formData: any, id: string) {
	const response = await requestWithToken(`admin/product/${id}`, {
		method: "PUT",
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

export async function fetchProductsbyId(id: string) {
	const response = await requestWithToken(`admin/product/${id}`, {
		method: "GET",
	});
	return response;
}

export async function deleteProduct(id: string) {
	const response = await requestWithToken(`admin/product/${id}`, {
		method: "DELETE",
	});
	return response;
}
