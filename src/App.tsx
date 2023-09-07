import { useState } from "react";
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/login";
import { Route, Routes } from "react-router";
import ProductsPage from "./pages/products/Products";
import CategoriesPage from "./pages/Categories";
import ProductAddPage from "./pages/products/ProductsAdd";

function App() {
	const [theme, setTheme] = useState<"dark" | "light">("dark");

	return (
		<div data-theme={theme} className="min-h-screen">
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
				</Routes>
			</SideDrawer>
		</div>
	);
}

export default App;
