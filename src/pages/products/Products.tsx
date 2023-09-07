import type { FC } from "react";
import { BsPencil } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Subheader from "../../components/SubHeader";

interface ProductsPageProps {}

const ProductsPage: FC<ProductsPageProps> = () => {
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
							<Link to='/products/add'>
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
									<th>Category</th>
									<th>Featured</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody className="text-center">
								<tr>
									<td>
										<img
											src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
											className="w-20 aspect-square mx-auto"
										/>
									</td>
									<td>Fruits</td>
									<td></td>
									<td>
										<input
											type="checkbox"
											className="toggle toggle-primary toggle-sm"
											checked
										/>
									</td>
									<td>
										<button className="btn btn-square mr-2 btn-sm btn-primary">
											<BsPencil />
										</button>
										<button className="btn btn-square btn-sm btn-primary">
											<RiDeleteBin6Line />
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ProductsPage;
