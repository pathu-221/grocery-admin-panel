import type { FC } from "react";
import { ImHome } from "react-icons/im";

interface SubheaderProps {
	children?: React.ReactNode;
}

const Subheader: FC<SubheaderProps> = ({ children }) => {
	return (
		<div className="min-w-screen rounded-full bg-base-300 m-2 px-5 py-2">
			<div className="text-sm breadcrumbs">
				<ul>
					<li>
						<ImHome />
					</li>
					<li>
						<a>Dashboard</a>
					</li>
					{children}
				</ul>
			</div>
		</div>
	);
};

export default Subheader;
