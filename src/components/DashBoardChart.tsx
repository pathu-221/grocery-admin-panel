import { type FC, useEffect, useState } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

interface DashboardChartProps {
	chartData: { [key: string]: number };
}

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
	labels,
	datasets: [
		{
			label: "Total Sales",
			data: labels.map(() => Math.random() * 80),
		},
	],
};

const DashboardChart: FC<DashboardChartProps> = ({ chartData }) => {
	useEffect(() => { }, []);
	
	return (
		<div className="w-full">
			<Line
				className="max-w-full bg-base-300 mt-3 rounded-2xl p-3"
				options={{
					responsive: true,
					borderColor: "rgb(255, 99, 132)",
					scales: {
						y: { beginAtZero: true },
					},
				}}
				data={{
					labels: Object.keys(chartData),
					datasets: [
						{
							label: "Orders",
							data: Object.keys(chartData).map((key) => chartData[key]),
						},
					],
				}}
			/>
		</div>
	);
};

export default DashboardChart;
