import type { FC } from "react";
import Subheader from "../components/SubHeader";
import { Link } from "react-router-dom";
import { TbCategory2 } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineAdd } from "react-icons/md";
import { BsPencil } from "react-icons/bs";

interface CategoriesProps {}

const Categories: FC<CategoriesProps> = () => {
	return (
		<div className="drawer drawer-end">
			<input id="categories-modal" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				{/* Page content here */}
				<main className="p-2">
					<Subheader>
						<li>
							<Link to={""}>Categories</Link>
						</li>
					</Subheader>
					{/** main content */}
					<section className="card w-full bg-base-300 mt-2">
						<div className="card-body p-6">
							<h2 className="card-title text-3xl flex items-center justify-between">
								<span className="flex items-center gap-2">
									<TbCategory2 />
									Categories
								</span>
								<span>
									<label
										htmlFor="categories-modal"
										className="btn btn-primary btn-sm rounded-full"
									>
										<MdOutlineAdd size={20} className="text-white" />
										Add
									</label>
								</span>
							</h2>
							<div className="overflow-x-auto">
								<table className="table mt-3 text-center">
									{/* head */}
									<thead className="text-base">
										<tr className="bg-base-100">
											<th>Image</th>
											<th>Picture</th>
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
											<td>
												<label htmlFor="categories-modal" className="btn btn-square mr-2 btn-sm btn-primary">
													<BsPencil />
												</label>
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
			</div>
			<div className="drawer-side">
				<label htmlFor="categories-modal" className="drawer-overlay"></label>
				<section className="menu p-4 w-[450px] min-h-full bg-base-200 text-base-content">

				</section>
			</div>
		</div>
	);
};

export default Categories;
