import { type FC, useState, useEffect } from "react";
import Subheader from "../../components/SubHeader";
import { Link, useLocation } from "react-router-dom";
import { IOrder } from "../../interfaces/order.interface";
import { fetchOrderById } from "../../apis/order.api";
import showToast from "../../components/ShowToast";
import { getImageUrl } from "../../helpers/getFileUrl.helper";
import { HiOutlineMail } from "react-icons/hi";

interface OrderDetailPageProps {}

const OrderDetailPage: FC<OrderDetailPageProps> = () => {
	const { search } = useLocation();
	const urlParams = new URLSearchParams(search);
	const orderId = urlParams.get("orderId");

	const [order, setOrder] = useState<IOrder>();

	useEffect(() => {
		loadOrder();
	}, []);

	const loadOrder = async () => {
		if (!orderId) return;

		const response = await fetchOrderById(orderId);
		if (!response.status) return showToast(response.msg);
		setOrder(response.data);
	};

	return (
		<main className="p-2">
			<Subheader>
				<li>
					<Link to="/orders">Orders</Link>
				</li>
				<li>
					<Link to="">Order detail</Link>
				</li>
			</Subheader>

			<section className="card w-full bg-base-300 mt-2">
				{order && (
					<>
						<div className="card-body p-6">
							<h2 className="card-title text-3xl flex items-center justify-between">
								<span className="flex items-center gap-2">
									Order #{order.id}
								</span>
							</h2>
						</div>
						{/** order items */}

						<div className="flex flex-col p-6">
							<h1 className="text-2xl mb-4 font-bold">Order items</h1>
							{order.order_items.map((item) => (
								<>
									<div className="grid grid-cols-9 w-full gap-5 items-center justify-between">
										<span className="flex gap-3 items-center col-span-3">
											<img
												src={getImageUrl(JSON.parse(item.product.images)[0])}
												className="w-32 rounded-xl aspect-square"
											/>
											<h1 className="text-2xl font-semibold">
												{item.product.name}
											</h1>
										</span>

										<span className="col-span-2 place-self-center">
											₹{item.product_price}
										</span>
										<span className="col-span-2 place-self-center">
											x{item.product_quantity}
										</span>
										<span className="col-span-2 place-self-center">
											₹{item.product_quantity * item.product_price}
										</span>
									</div>
									<div className="divider"></div>
								</>
							))}
						</div>
					</>
				)}
			</section>
			<div className="flex gap-3">
				{/** order summary */}
				{order && (
					<>
						<div className="card p-6 bg-base-300 mt-2 flex-grow max-w-[50%]">
							<h3 className="text-xl font-bold mb-3">Order Summary</h3>
							<div className="flex flex-col">
								<span className="flex justify-between">
									<p className="text-md">Sub total </p>
									<p className="text-md">₹{order.grand_total}</p>
								</span>
								<div className="divider m-1 p-0" />
								<span className="flex justify-between">
									<p className="text-md">Discount</p>
									<p className="text-md">- ₹0(0%)</p>
								</span>
								<div className="divider m-1 p-0" />

								<span className="flex justify-between text-lg font-bold">
									<p className="text-md">Grand Total</p>
									<p className="text-md">₹{order.grand_total}</p>
								</span>
							</div>
						</div>
						<div className="card bg-base-300 flex-grow mt-2 max-w-[50%] p-6">
							<h3 className="text-xl font-bold mb-3">Customer Details</h3>
							{/** customer name */}
							<div className="flex items-start justify-between">
								<div className="flex flex-col gap-4">
									<span className="flex flex-col gap-1">
										<h4 className="text-lg font-semibold capitalize">{`${order.buyer.first_name} ${order.buyer.last_name}`}</h4>
										<a
											href={`mailto:${order.buyer.email}`}
											className="flex gap-2 items-center "
										>
											<HiOutlineMail />
											{order.buyer.email}
										</a>
									</span>
									<span className="flex flex-col gap-1">
										<h4 className="text-base font-semibold">Payment method</h4>
										<p className="capitalize">{order.payment_type}</p>
									</span>
								</div>
								<div className="text-left flex flex-col gap-2">
									<h4 className="font-semibold text-lg">Shipping Address</h4>
									<span className="">
										{`${order.shipping_address_1}`}
										<br />
										{order.shipping_address_2 && (
											<span>
												{order.shipping_address_2} <br />
											</span>
										)}
										{order.shipping_state} <br />
										{`${order.shipping_city}-${order.shipping_zip}`} <br />
									</span>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</main>
	);
};

export default OrderDetailPage;
