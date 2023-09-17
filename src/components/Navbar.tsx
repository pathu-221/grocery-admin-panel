import { type FC, useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { authContext } from "../contexts/authContext";
import { useNavigate } from "react-router";

interface NavbarProps {
	theme: string;
	setTheme: () => void;
}

const Navbar: FC<NavbarProps> = ({ theme, setTheme }) => {
	const { setUser } = useContext(authContext);
	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem("token");
		setUser(null);
		navigate("/login");
	};
	return (
		<nav className="navbar bg-base-300">
			<div className="flex-none">
				<label htmlFor="my-drawer" className="btn btn-square btn-ghost">
					<BiMenu size={24} />
				</label>
			</div>
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">Welcome</a>
			</div>

			<div className="flex-none btn btn-sm btn-ghost" onClick={setTheme}>
				{theme === "dark" ? (
					<BsFillSunFill size={20} />
				) : (
					<BsFillMoonFill size={20} />
				)}
			</div>
			<div className="dropdown dropdown-end">
				<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
					<div className="w-10 rounded-full">
						<img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" />
					</div>
				</label>
				<ul
					tabIndex={0}
					className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
				>
					<li>
						<a className="flex text-lg gap-3" onClick={() => logout()}>
							<FiLogOut /> Logout
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
