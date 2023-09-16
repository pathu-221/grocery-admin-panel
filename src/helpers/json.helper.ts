export function parseJSONdata(data: string) {
	return JSON.parse(data);
}
export function getFormattedDate(inputDate: string) {
	const date = new Date(inputDate);
	return date.toLocaleDateString(undefined, {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
