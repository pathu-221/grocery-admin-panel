import { type FC, useState, useEffect } from "react";
import { BsPencil } from "react-icons/bs";
import { MdOutlineAdd } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbCategory2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import Subheader from "../../components/SubHeader";
import CategoriesAdd from "./CategoriesAdd";
import { ICategory } from "../../interfaces/category.interface";
import { deleteCategory, fetchAllCategories } from "../../apis/categories.api";
import showToast from "../../components/ShowToast";
import { getImageUrl } from "../../helpers/getFileUrl";

interface CategoriesPageProps {}

const CategoriesPage: FC<CategoriesPageProps> = () => {
	const [category, setCategory] = useState<ICategory | undefined>();
	const [categories, setCategories] = useState<ICategory[] | undefined>();

	useEffect(() => {
		loadCategories();
	}, []);

	const loadCategories = async () => {
		const response = await fetchAllCategories();
		if (!response || !response.status) return showToast(response.msg);
		setCategories(response.data);
	};

	const categoryDelete = async (id: string) => {
		const response = await deleteCategory(id);
		if (!response || !response.status) return showToast(response.msg);
		showToast(response.msg, "success");
		loadCategories();
	};
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
										onClick={() => setCategory(undefined)}
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
											<th>Name</th>
											<th>Actions</th>
										</tr>
									</thead>
									<tbody className="text-center">
										{categories &&
											categories.map((item) => (
												<tr>
													<td>
														<img
															src={getImageUrl(item.image)}
															className="w-20 aspect-square mx-auto"
														/>
													</td>
													<td>{item.name}</td>
													<td>
														<label
															onClick={() => setCategory(item)}
															htmlFor="categories-modal"
															className="btn btn-square mr-2 btn-sm btn-primary"
														>
															<BsPencil />
														</label>
														<button
															onClick={() => categoryDelete(item.id)}
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
			</div>
			<div className="drawer-side">
				<label htmlFor="categories-modal" className="drawer-overlay"></label>
				<CategoriesAdd
					onUpdate={() => loadCategories()}
					category={category}
					key={`${category?.name}`}
				/>
			</div>
		</div>
	);
};

export default CategoriesPage;
