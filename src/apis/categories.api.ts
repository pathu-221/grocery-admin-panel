import { requestWithToken } from "../helpers/http.helpers";

export async function fetchAllCategories() {
	const response = await requestWithToken("admin/categories", {
		method: "GET",
	});
	return response;
}

export async function deleteCategory(id: string) {
	const response = await requestWithToken(`admin/categories/${id}`, {
		method: "DELETE",
	});
	return response;
}

export async function addCategory(formData: any) {
	const response = await requestWithToken(`admin/categories`, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(formData),
	});
	return response;
}