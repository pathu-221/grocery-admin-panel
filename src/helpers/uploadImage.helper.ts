import { requestWithToken } from "./http.helper";

export async function uploadImage(file: File) {
	const formData = new FormData();
	formData.append("image", file);
	const response = await requestWithToken("file/upload", {
		method: "POST",
		body: formData,
	});
	return response;
}
