import { useState } from "react"
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/login";
import Categories from "./pages/Categories";
import { Route, Routes } from "react-router";

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
					<Route path="/" element={ <DashBoard /> } />
					<Route path="/categories" element={ <Categories /> } />
				</Routes>
			</SideDrawer>
		</div>
	);
}

export default App;
