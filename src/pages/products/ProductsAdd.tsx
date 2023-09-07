import type { FC } from "react";
import { FaBoxOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Subheader from "../../components/SubHeader";

interface ProductAddPageProps {}

const ProductAddPage: FC<ProductAddPageProps> = () => {
	return (
		<main className="p-2">
			<Subheader>
				<li>
					<Link to="/products">Products</Link>
				</li>
				<li>
					<Link to="">Add Product</Link>
				</li>
			</Subheader>
			{/* main content */}
			<section className="card w-full bg-base-300 mt-2">
				<div className="card-body p-6">
					<h2 className="card-title text-3xl flex items-center justify-between">
						<span className="flex items-center gap-2">
							<FaBoxOpen />
							Add Product
						</span>
					</h2>
					<div className="w-full">
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text text-lg">Name</span>
							</label>
							<input
								type="text"
								placeholder="Enter product name"
								className="input input-bordered"
							/>
						</div>
						<div className="flex flex-col md:flex-row md:gap-6">
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text text-lg">Price</span>
								</label>
								<input type="number" className="input input-bordered" />
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text text-lg">Quantity</span>
								</label>
								<input type="number" className="input input-bordered" />
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text text-lg">Category</span>
								</label>
								<select className="select select-bordered">
									<option disabled selected>
										--select--
									</option>
									<option>Star Wars</option>
									<option>Harry Potter</option>
									<option>Lord of the Rings</option>
									<option>Planet of the Apes</option>
									<option>Star Trek</option>
								</select>
							</div>
						</div>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text text-lg">Description</span>
							</label>
							<textarea
								rows={5}
								placeholder="Enter product description"
								className="textarea textarea-bordered"
							/>
						</div>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text text-lg">Images</span>
							</label>
							<input type="file" className="file-input file-input-bordered" />
						</div>
					</div>
					<span className="mt-3 self-end">
						<button className="px-16 btn btn-primary">Save</button>
					</span>
				</div>
			</section>
		</main>
	);
};

export default ProductAddPage;
