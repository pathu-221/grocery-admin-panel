// Generated by https://quicktype.io

export interface IProduct {
	id: string;
	name: string;
	description: string;
	base_price: number;
	quantity: number;
	category_id: string;
	category: { name: string; id: string };
	images: string;
	status: number;
	created_at: string;
	updated_at: string;
	deleted_at: null;
}
