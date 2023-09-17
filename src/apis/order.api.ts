import { requestWithToken } from "../helpers/http.helper";

export async function fetchAllOrders() {
	const data = await requestWithToken("admin/orders");
	return data;
}

export async function fetchOrderById(id: string) {
	const data = await requestWithToken(`admin/orders/${id}`);
	return data;
}

export async function updateOrder(orderId: string, formData: any) {
	const data = await requestWithToken(`admin/orders/${orderId}`, {
		method: "PUT",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(formData),
	});
	return data;
}
