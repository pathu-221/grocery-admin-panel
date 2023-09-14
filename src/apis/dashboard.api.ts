import { requestWithToken } from "../helpers/http.helper";

export async function getDashBoardData() {
	const data = await requestWithToken("admin/dashboard");

	return data;
}
