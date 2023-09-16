import { type FC, useState, useEffect } from "react";
import Subheader from "../components/SubHeader";
import DashboardChart from "../components/DashBoardChart";
import { IDashboard } from "../interfaces/dashboard.interface";
import showToast from "../components/ShowToast";
import { getDashBoardData } from "../apis/dashboard.api";

interface DashBoardProps {}

const DashBoard: FC<DashBoardProps> = () => {
	const [dashBoard, setDashBoard] = useState<IDashboard>();

	useEffect(() => {
		loadDashboard();
	}, []);

	const loadDashboard = async () => {
		const response = await getDashBoardData();
		if (!response.status) return showToast(response.msg);

		setDashBoard(response.data);
	};

	return (
		<main className="p-2">
			<Subheader />
			{/* cards container */}
			{dashBoard && (
				<>
					<div className="flex mt-3 gap-5 flex-col md:flex-row">
						<div className="card flex-grow bg-base-300">
							<div className="card-body p-6">
								<h2 className="card-title text-2xl font-semibold">Sales</h2>
								<p className="text-4xl font-bold">
									${dashBoard.totalSales.toLocaleString()}
								</p>
							</div>
						</div>
						<div className="card flex-grow bg-base-300">
							<div className="card-body p-6">
								<h2 className="card-title text-2xl font-semibold">Orders</h2>
								<p className="text-4xl font-bold">
									{dashBoard.totalOrders.toLocaleString()}
								</p>
							</div>
						</div>
						<div className="card flex-grow bg-base-300">
							<div className="card-body p-6">
								<h2 className="card-title text-2xl font-semibold">
									Average reviews
								</h2>
								<p className="text-4xl font-bold">
									{dashBoard.averageReviews.toLocaleString()}⭐
								</p>
							</div>
						</div>
					</div>
					<DashboardChart chartData={dashBoard.ordersByMonth } />
				</>
			)}
		</main>
	);
};

export default DashBoard;
