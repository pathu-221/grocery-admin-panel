import { useEffect, type FC, type ChangeEvent, useState } from "react";
import Subheader from "../../components/SubHeader";
import { Link } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { fetchAllOrders, updateOrder } from "../../apis/order.api";
import showToast from "../../components/ShowToast";
import { IOrder } from "../../interfaces/order.interface";
import { getFormattedDate } from "../../helpers/json.helper";
import { BiSolidDetail } from "react-icons/bi";
import { orderStatus } from "../../enums/order-status.enum";

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

	const updateOrderStatus = async (
		id: string,
		e: ChangeEvent<HTMLSelectElement>
	) => {
		//console.log({ status });
		const response = await updateOrder(id, { status: e.target.value });
		if (!response.status) return showToast(response.msg);
		showToast(response.msg, "success");
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
									<th>Order date</th>
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
											<td>{getFormattedDate(item.created_at)}</td>
											<td>{item.total_items}</td>
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
											<td>
												<select
													onChange={(e) => updateOrderStatus(item.id, e)}
													defaultValue={item.status}
													className="select select-bordered select-sm w-full max-w-xs"
												>
													<option disabled selected>
														--select--
													</option>
													{Object.values(orderStatus).map((status) => (
														<option key={status} value={status}>
															{status}
														</option>
													))}
												</select>
											</td>
											<td>
												<div data-tip="View details" className="tooltip">
													<Link
														to={`/orders/order-detail/?orderId=${item.id}`}
														className="btn btn-square btn-sm btn-primary"
													>
														<BiSolidDetail />
													</Link>
												</div>
											</td>
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
