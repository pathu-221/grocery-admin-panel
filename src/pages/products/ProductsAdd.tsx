import { type FC, type ChangeEvent, useState, useEffect } from "react";
import { FaBoxOpen } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Subheader from "../../components/SubHeader";
import { useFormik } from "formik";
import { ICategory } from "../../interfaces/category.interface";
import { fetchAllCategories } from "../../apis/categories.api";
import showToast from "../../components/ShowToast";
import { object, string, array, number } from "yup";
import { uploadImage } from "../../helpers/uploadImage.helper";
import { getImageUrl } from "../../helpers/getFileUrl.helper";
import { addProduct } from "../../apis/products.api";

interface ProductAddPageProps {}

const ProductAddPage: FC<ProductAddPageProps> = () => {
	const [categories, setCategories] = useState<ICategory[]>();
	const navigate = useNavigate();

	const proudctFormik = useFormik({
		initialValues: {
			name: "",
			description: "",
			basePrice: 0,
			quantity: 0,
			images: [],
			categoryId: "",
		},
		validationSchema: object({
			name: string().required("Name is required"),
			description: string().required("Description is required"),
			basePrice: number()
				.typeError("Base Price must be a number")
				.required("Base Price is required")
				.min(5, "Base Price must be greater than or equal to 5"),
			quantity: number()
				.typeError("Quantity must be a number")
				.required("Quantity is required")
				.min(1, "Quantity must be greater than or equal to 1"),
			images: array().of(string()).min(1, "Atleast 1 image is required"), // Assuming an array of string filenames
			categoryId: string().required("Category is required"),
		}),
		onSubmit: async (values) => {
			console.log(values);
			const requestBody = {
				name: values.name,
				description: values.description,
				category_id: values.categoryId,
				base_price: values.basePrice,
				quantity: values.quantity,
				images: values.images,
			};
			const response = await addProduct(requestBody);
			if (!response.status) return showToast(response.msg);
			showToast(response.msg, "success");
			navigate("/products");
		},
	});

	const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;

		const response = await uploadImage(e.target.files[0]);
		if (!response.status) return showToast(response.msg);

		proudctFormik.setFieldValue("images", [
			...proudctFormik.values.images,
			response.data,
		]);
	};

	const loadCategories = async () => {
		const response = await fetchAllCategories();
		if (!response || !response.status) return showToast(response.msg);
		setCategories(response.data);
	};

	useEffect(() => {
		loadCategories();
	}, []);

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
			<form
				onSubmit={proudctFormik.handleSubmit}
				className="card w-full bg-base-300 mt-2"
			>
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
								name="name"
								onChange={proudctFormik.handleChange}
								type="text"
								placeholder="Enter product name"
								className="input input-bordered"
							/>
							{proudctFormik.errors.name && proudctFormik.touched.name && (
								<label className="label label-text-alt text-error">
									{proudctFormik.errors.name}
								</label>
							)}
						</div>
						<div className="flex flex-col md:flex-row md:gap-6">
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text text-lg">Price</span>
								</label>
								<input
									name="basePrice"
									onChange={proudctFormik.handleChange}
									type="number"
									className="input input-bordered"
								/>
								{proudctFormik.errors.basePrice &&
									proudctFormik.touched.basePrice && (
										<label className="label label-text-alt text-error">
											{proudctFormik.errors.basePrice}
										</label>
									)}
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text text-lg">Quantity</span>
								</label>
								<input
									name="quantity"
									onChange={proudctFormik.handleChange}
									type="number"
									className="input input-bordered"
								/>
								{proudctFormik.errors.quantity &&
									proudctFormik.touched.quantity && (
										<label className="label label-text-alt text-error">
											{proudctFormik.errors.quantity}
										</label>
									)}
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text text-lg">Category</span>
								</label>
								<select
									name="categoryId"
									onChange={proudctFormik.handleChange}
									className="select select-bordered"
								>
									<option disabled selected={true}>
										--select--
									</option>
									{categories &&
										categories.map((item) => (
											<option value={item.id}>{item.name}</option>
										))}
								</select>
								{proudctFormik.errors.categoryId &&
									proudctFormik.touched.categoryId && (
										<label className="label label-text-alt text-error">
											{proudctFormik.errors.categoryId}
										</label>
									)}
							</div>
						</div>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text text-lg">Description</span>
							</label>
							<textarea
								name="description"
								onChange={proudctFormik.handleChange}
								rows={5}
								placeholder="Enter product description"
								className="textarea textarea-bordered"
							/>
							{proudctFormik.errors.description &&
								proudctFormik.touched.description && (
									<label className="label label-text-alt text-error">
										{proudctFormik.errors.description}
									</label>
								)}
						</div>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text text-lg">Images</span>
							</label>
							{proudctFormik.values.images &&
								proudctFormik.values.images.length > 0 && (
									<div className="mb-3 flex gap-3 flex-wrap">
										{proudctFormik.values.images.map((image, index) => (
											<img
												src={getImageUrl(image)}
												alt={`Image ${index}`}
												className="object-cover w-20 aspect-square rounded-xl"
											/>
										))}
									</div>
								)}

							<input
								onChange={handleFileChange}
								type="file"
								className="file-input file-input-bordered"
							/>
							{proudctFormik.errors.images && proudctFormik.touched.images && (
								<label className="label label-text-alt text-error">
									{proudctFormik.errors.images}
								</label>
							)}
						</div>
					</div>
					<span className="mt-3 self-end">
						<button className="px-16 btn btn-primary">Save</button>
					</span>
				</div>
			</form>
		</main>
	);
};

export default ProductAddPage;
