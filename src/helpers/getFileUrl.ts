import { BASE_URL } from "./http.helpers";

export function getImageUrl(name: string) {
	return `${BASE_URL}/${name}`;
}
