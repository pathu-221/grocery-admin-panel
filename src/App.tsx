import { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import { authenticate } from "./apis/auth.api";
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import { AuthProvider, authContext } from "./contexts/authContext";
import CategoriesPage from "./pages/categories/Categories";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import ProductsPage from "./pages/products/Products";
import ProductAddPage from "./pages/products/ProductsAdd";
import OrdersPage from "./pages/orders/Orders";

function App() {
	const navigate = useNavigate();
	const location = useLocation();

	const [theme, setTheme] = useState<"dark" | "light">("dark");

	const { setUser } = useContext(authContext);
	useEffect(() => {
		authenticateUser();
	}, []);

	const authenticateUser = async () => {
		const response = await authenticate();
		if (!response || !response.status) return navigate("/login");
		setUser(response.data.user);
	};

	if (location.pathname == "/login")
		return (
			<>
				<Toaster position="top-right" reverseOrder={false} />
				<Login />
			</>
		);
	return (
		<div data-theme={theme} className="min-h-screen">
			<Toaster position="top-right" reverseOrder={false} />
			<AuthProvider>
				<SideDrawer>
					<Navbar
						theme={theme}
						setTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
					/>
					<Routes>
						<Route path="/" element={<DashBoard />} />
						<Route path="/categories" element={<CategoriesPage />} />
						<Route path="/products" element={<ProductsPage />} />
						<Route path="/products/add" element={<ProductAddPage />} />
						<Route path="/orders" element={<OrdersPage />} />
					</Routes>
				</SideDrawer>
			</AuthProvider>
		</div>
	);
}

export default App;
