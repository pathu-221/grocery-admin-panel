import type { FC } from "react";
import { BiMenu } from "react-icons/bi";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

interface NavbarProps {
	theme: string;
	setTheme: () => void;
}

const Navbar: FC<NavbarProps> = ({ theme, setTheme }) => {
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
                {theme === "dark" ? <BsFillSunFill size={20} /> : <BsFillMoonFill size={20} />}
			</div>
			<div className="flex-none btn btn-ghost">
				<img
					className="aspect-square w-12 rounded-full"
					src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
				/>
			</div>
		</nav>
	);
};

export default Navbar;
