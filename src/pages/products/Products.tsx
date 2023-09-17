import { type FC, useState, useEffect } from "react";
import { BsPencil } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Subheader from "../../components/SubHeader";
import {
	deleteProduct,
	editProduct,
	fetchAllProducts,
} from "../../apis/products.api";
import showToast from "../../components/ShowToast";
import { IProduct } from "../../interfaces/product.interface";
import { getImageUrl } from "../../helpers/getFileUrl.helper";

interface ProductsPageProps {}

const ProductsPage: FC<ProductsPageProps> = () => {
	const [products, setProducts] = useState<IProduct[]>();

	const loadProducts = async () => {
		const response = await fetchAllProducts();
		if (!response.status) return showToast(response.msg);
		setProducts(response.data);
	};

	const updatProductFeatured = async (value: boolean, id: string) => {
		const response = await editProduct({ is_featured: value }, id);
		console.log({ response, value });
		if (!response.status) return showToast(response.msg, "error");

		loadProducts();
	};
	const productDelete = async (id: string) => {
		const response = await deleteProduct(id);
		if (!response.status) return showToast(response.msg);
		showToast(response.msg, "success");
		loadProducts();
	};
	useEffect(() => {
		loadProducts();
	}, []);
	return (
		<main className="p-2">
			<Subheader>
				<li>
					<Link to="">Products</Link>
				</li>
			</Subheader>
			{/* main content */}
			<section className="card w-full bg-base-300 mt-2">
				<div className="card-body p-6">
					<h2 className="card-title text-3xl flex items-center justify-between">
						<span className="flex items-center gap-2">
							<FaBoxOpen />
							Products
						</span>
						<span>
							<Link to="/products/add">
								<button className="btn btn-primary btn-sm rounded-full">
									<MdOutlineAdd size={20} className="text-white" />
									Add
								</button>
							</Link>
						</span>
					</h2>
					<div className="overflow-x-auto">
						<table className="table mt-3 text-center">
							{/* head */}
							<thead className="text-base">
								<tr className="bg-base-100">
									<th>Image</th>
									<th>Name</th>
									<th>Price</th>
									<th>Category</th>
									<th>Featured</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody className="text-center">
								{products &&
									products.map((item) => (
										<tr>
											<td>
												<img
													src={getImageUrl(JSON.parse(item.images)[0])}
													className="w-20 aspect-square mx-auto"
												/>
											</td>
											<td>{item.name}</td>
											<td>₹{item.base_price}</td>
											<td>{item.category.name}</td>
											<td>
												<input
													onChange={() =>
														updatProductFeatured(!item.is_featured, item.id)
													}
													type="checkbox"
													className="toggle toggle-primary toggle-sm"
													checked={item.is_featured}
												/>
											</td>
											<td>
												<Link to={`/products/add/?productId=${item.id}`}>
													<button className="btn btn-square mr-2 btn-sm btn-primary">
														<BsPencil />
													</button>
												</Link>
												<button
													onClick={() => productDelete(item.id)}
													className="btn btn-square btn-sm btn-primary"
												>
													<RiDeleteBin6Line />
												</button>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ProductsPage;
