import type { FC } from "react";
import { Link } from "react-router-dom";

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
				<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
					{/* Sidebar content here */}
					<div className="collapse collapse-arrow bg-base-200">
						<input type="checkbox" />
						<div className="collapse-title text-xl font-medium">DashBoard</div>
						<div className="collapse-content">
							<Link to={"/"} className="link link-hover">
								Home
							</Link>
						</div>
					</div>
				</ul>
			</div>
		</div>
	);
};

export default SideDrawer;
