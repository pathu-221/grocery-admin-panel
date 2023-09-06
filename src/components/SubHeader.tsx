import type { FC } from "react";
import { ImHome } from "react-icons/im";
import { Link } from "react-router-dom";

interface SubheaderProps {
	children?: React.ReactNode;
}

const Subheader: FC<SubheaderProps> = ({ children }) => {
	return (
		<div className="rounded-full bg-base-300 px-5 py-2">
			<div className="text-sm breadcrumbs">
				<ul>
					<li>
						<ImHome />
					</li>
					<li>
						<Link to={"/"}>Dashboard</Link>
					</li>
					{children}
				</ul>
			</div>
		</div>
	);
};

export default Subheader;
