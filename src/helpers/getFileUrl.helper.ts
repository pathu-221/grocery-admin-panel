import { BASE_URL } from "./http.helper";

export function getImageUrl(name: string) {
	return `${BASE_URL}/${name}`;
}
