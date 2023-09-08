import type { FC } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

interface CategoriesAddProps {}

const CategoriesAdd: FC<CategoriesAddProps> = () => {
	return (
		<section className="menu p-4 w-[450px] min-h-full bg-base-200 text-base-content flex flex-col">
			<div className="form-control w-full">
				<label className="label">
					<span className="label-text text-xl">Name: </span>
				</label>
				<input
					type="text"
					placeholder="Type here"
					className="input input-bordered w-full"
				/>
			</div>
			<label
				htmlFor="fileInput"
				className="bg-base-300 input-bordered mt-5 rounded-xl aspect-video w-full flex items-center justify-center cursor-pointer hover:bg-base-100"
			>
				<span className="flex flex-col items-center">
					<FaCloudUploadAlt size={100} className="" />
					<p className="text-lg">Upload Image</p>
				</span>
				<input
					hidden
					type="file"
					id="fileInput"
					accept="image/*"
					className="w-full h-full"
				/>
			</label>
			<span className="mt-auto justify-self-end">
				<button className="btn-primary btn btn-block">Save</button>
			</span>
		</section>
	);
};

export default CategoriesAdd;
