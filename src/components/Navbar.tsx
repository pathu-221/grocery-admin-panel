import type { FC } from "react";
import { BiMenu } from "react-icons/bi";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
	return (
		<nav className="navbar bg-base-100">
			<div className="flex-none">
				<label htmlFor="my-drawer"  className="btn btn-square btn-ghost">
					<BiMenu size={24} />
				</label>
			</div>
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">Welcome</a>
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
