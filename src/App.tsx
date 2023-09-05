import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/login";

function App() {
	const [theme, setTheme] = useState<"dark" | "light">("dark");

	return (
		<div data-theme={theme} className="min-h-screen">
			<SideDrawer>
				<Navbar
					theme={theme}
					setTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
				/>
				<DashBoard />
			</SideDrawer>
		</div>
	);
}

export default App;
