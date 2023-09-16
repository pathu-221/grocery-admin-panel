import { useEffect, type FC, useState } from "react";
import Subheader from "../../components/SubHeader";
import { Link } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { fetchAllOrders } from "../../apis/order.api";
import showToast from "../../components/ShowToast";
import { IOrder } from "../../interfaces/order.interface";
import { getFormattedDate } from "../../helpers/json.helper";

interface OrdersPageProps {}

const OrdersPage: FC<OrdersPageProps> = () => {
	const [orders, setOrders] = useState<IOrder[]>([]);
	useEffect(() => {
		loadOrders();
	}, []);

	const loadOrders = async () => {
		const response = await fetchAllOrders();
		if (!response.status) return showToast(response.msg);

		setOrders(response.data);
	};
	return (
		<main className="p-2">
			<Subheader>
				<li>
					<Link to="">Orders</Link>
				</li>
			</Subheader>
			<section className="card w-full bg-base-300 mt-2">
				<div className="card-body p-6">
					<h2 className="card-title text-3xl flex items-center justify-between">
						<span className="flex items-center gap-2">
							<BsCartCheckFill />
							Orders
						</span>
					</h2>
					<div className="overflow-x-auto">
						<table className="table mt-3 text-center">
							{/* head */}
							<thead className="text-base">
								<tr className="bg-base-100">
									<th>Sr No.</th>
									<th>Order data</th>
									<th>Total Items</th>
									<th>Grand total</th>
									<th>Payment status</th>
									<th>Address</th>
									<th>Order status</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody className="text-center">
								{orders.length &&
									orders.map((item, index) => (
										<tr key={item.id}>
											<td>{index + 1}</td>
											<td>{item.total_items}</td>
											<td>{getFormattedDate(item.created_at)}</td>
											<td>₹{item.grand_total}</td>
											<td>{item.payment_status}</td>
											<td>
												{`${item.shipping_address_1}`}
												<br />
												{item.shipping_address_2 && (
													<span>
														{item.shipping_address_2} <br />
													</span>
												)}
												{item.shipping_state} <br />
												{`${item.shipping_city}-${item.shipping_zip}`} <br />
											</td>
											<td>{item.status}</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</main>
	);
};

export default OrdersPage;
