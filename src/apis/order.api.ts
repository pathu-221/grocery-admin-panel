import { requestWithToken } from "../helpers/http.helper";

export async function fetchAllOrders() {
	const data = await requestWithToken("admin/orders");
	return data;
}

export async function updateOrder(formData: any) {
	const data = await requestWithToken("admin/orders", {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(formData),
	});
	return data;
}
