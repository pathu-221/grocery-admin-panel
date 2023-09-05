import "./App.css";
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/login";

function App() {
	return (
		<div data-theme="dark">
			<SideDrawer>
				<Navbar />
				<DashBoard />
			</SideDrawer>
		</div>
	);
}

export default App;
