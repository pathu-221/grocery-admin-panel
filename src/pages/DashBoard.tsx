import type { FC } from "react";
import Subheader from "../components/SubHeader";
import DashboardChart from "../components/DashBoardChart";

interface DashBoardProps {}

const DashBoard: FC<DashBoardProps> = () => {
	return (
		<main className="p-2">
			<Subheader />
			{/* cards container */}
			<div className="flex mt-3 gap-5 flex-col md:flex-row">
				<div className="card flex-grow bg-base-300">
					<div className="card-body p-6">
						<h2 className="card-title text-2xl font-semibold">Sales</h2>
						<p className="text-4xl font-bold">${(2000).toLocaleString()}</p>
					</div>
				</div>
				<div className="card flex-grow bg-base-300">
					<div className="card-body p-6">
						<h2 className="card-title text-2xl font-semibold">Orders</h2>
						<p className="text-4xl font-bold">{(437).toLocaleString()}</p>
					</div>
				</div>
				<div className="card flex-grow bg-base-300">
					<div className="card-body p-6">
						<h2 className="card-title text-2xl font-semibold">Average reviews</h2>
						<p className="text-4xl font-bold">{(4.6).toLocaleString()}⭐</p>
					</div>
				</div>
			</div>
			<DashboardChart />
		</main>
	);
};

export default DashBoard;
