import type { FC, ChangeEvent } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { ICategory } from "../../interfaces/category.interface";
import { useFormik } from "formik";
import { object, string } from "yup";
import { uploadImage } from "../../helpers/uploadImage";
import showToast from "../../components/ShowToast";
import { getImageUrl } from "../../helpers/getFileUrl";
import { addCategory } from "../../apis/categories.api";

interface CategoriesAddProps {
	category?: ICategory;
	onUpdate: Function;
}

const CategoriesAdd: FC<CategoriesAddProps> = ({ category, onUpdate }) => {
	console.log({ category });
	const categoryFormik = useFormik({
		initialValues: {
			name: category?.name || "",
			image: category?.image || "",
		},
		validationSchema: object({
			name: string().required("Category name is required"),
			image: string().required("Image is required"),
		}),
		onSubmit: async (values) => {
			const response = await addCategory(values);
			if (!response.status) return showToast(response.msg);
			showToast(response.msg, "success");
			onUpdate();
		},
	});

	const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
		console.log(!e.target.files);
		if (!e.target.files) return;

		const response = await uploadImage(e.target.files[0]);
		if (!response || !response.status) return showToast(response.msg);
		showToast(response.msg, "success");
		categoryFormik.setValues({
			...categoryFormik.values,
			image: response.data,
		});
	};

	return (
		<form
			onSubmit={categoryFormik.handleSubmit}
			className="menu p-4 w-[450px] min-h-full bg-base-200 text-base-content flex flex-col"
		>
			<div className="form-control w-full">
				<label className="label">
					<span className="label-text text-xl">Name: </span>
				</label>
				<input
					name="name"
					onChange={categoryFormik.handleChange}
					value={categoryFormik.values.name}
					type="text"
					placeholder="Category name"
					className="input input-bordered w-full"
				/>
				{categoryFormik.errors.name && (
					<label className="label label-text-alt text-error">
						{categoryFormik.errors.name}
					</label>
				)}
			</div>
			<label
				htmlFor="fileInput"
				className="bg-base-300 input-bordered mt-5 rounded-xl aspect-video w-full flex items-center justify-center cursor-pointer hover:bg-base-100"
			>
				{categoryFormik.values.image ? (
					<img
						className="w-full aspect-video overflow-hidden bg-contain inherit rounded-lg"
						src={getImageUrl(categoryFormik.values.image)}
					/>
				) : (
					<span className="flex flex-col items-center">
						<FaCloudUploadAlt size={100} className="" />
						<p className="text-lg">Upload Image</p>
					</span>
				)}
				<input
					hidden
					onChange={handleFileChange}
					type="file"
					id="fileInput"
					accept="image/*"
					className="w-full h-full"
				/>
			</label>
			{categoryFormik.errors.image && (
				<label className="label label-text-alt text-error">
					{categoryFormik.errors.image}
				</label>
			)}
			<span className="mt-auto justify-self-end">
				<button type="submit" className="btn-primary btn btn-block">
					Save
				</button>
			</span>
		</form>
	);
};

export default CategoriesAdd;
