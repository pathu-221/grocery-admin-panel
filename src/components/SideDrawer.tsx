import type { FC } from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";

interface SideDrawerProps {
	children: React.ReactNode;
}

const SideDrawer: FC<SideDrawerProps> = ({ children }) => {
	return (
		<div className="drawer">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">{children}</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer" className="drawer-overlay"></label>
				<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col items-center justify-start">
					<Link
						to="/"
						className="collapse-title text-lg font-medium hover:bg-base-300 dropdown-content rounded-md"
					>
						<span className="flex items-center justify-start gap-3">
							<MdDashboard /> DashBoard
						</span>
					</Link>
					<Link
						to="/categories"
						className="collapse-title text-lg font-medium hover:bg-base-300 dropdown-content rounded-md"
					>
						<span className="flex items-center justify-start gap-3">
							<TbCategory2 /> Categories
						</span>
					</Link>
					<Link
						to="/products"
						className="collapse-title text-lg font-medium hover:bg-base-300 dropdown-content rounded-md"
					>
						<span className="flex items-center justify-start gap-3">
							<FaBoxOpen /> Products
						</span>
					</Link>
					<Link
						to="/orders"
						className="collapse-title text-lg font-medium hover:bg-base-300 dropdown-content rounded-md"
					>
						<span className="flex items-center justify-start gap-3">
							<BsCartCheckFill /> Orders
						</span>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default SideDrawer;
