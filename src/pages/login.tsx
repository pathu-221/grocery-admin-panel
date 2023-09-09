import { useFormik } from "formik";
import { useContext, type FC, useEffect } from "react";
import showToast from "../components/ShowToast";
import { login } from "../apis/auth.api";
import { authContext } from "../contexts/authContext";
import { useNavigate } from "react-router";
import { object, string } from "yup";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
	const { user, setUser } = useContext(authContext);
	const navigate = useNavigate();

	const loginFormik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: object({
			email: string()
				.email("Invalid email address")
				.required("Email is required"),
			password: string().required("Password is required"),
		}),
		onSubmit: async (values) => {
			const response = await login(values);
			if (!response.status) return showToast(response.msg);
			const user = {
				...response.data.user,
			};
			delete user.password;
			localStorage.setItem("token", response.data.token);
			setUser(user);
			navigate("/");
		},
	});

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) return navigate("/");
	}, [user]);
	return (
		<div className="relative flex flex-col justify-center h-screen overflow-hidden">
			<div className="w-full p-6 m-auto bg-base-200 rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
				<h1 className="text-3xl font-semibold text-center">Admin Login</h1>
				<form className="space-y-4" onSubmit={loginFormik.handleSubmit}>
					<div>
						<label className="label">
							<span className="text-base label-text">Email</span>
						</label>
						<input
							name="email"
							onChange={loginFormik.handleChange}
							type="email"
							placeholder="Email Address"
							className="w-full input input-bordered"
						/>
						{loginFormik.errors.email && (
							<label className="label label-text-alt text-error">
								{loginFormik.errors.email}
							</label>
						)}
					</div>
					<div>
						<label className="label">
							<span className="text-base label-text">Password</span>
						</label>
						<input
							name="password"
							onChange={loginFormik.handleChange}
							type="password"
							placeholder="Enter Password"
							className="w-full input input-bordered"
						/>
						{loginFormik.errors.password && (
							<label className="label label-text-alt text-error">
								{loginFormik.errors.password}
							</label>
						)}
					</div>
					<a href="#" className="text-xs hover:underline hover:text-blue-600">
						Forget Password?
					</a>
					<div>
						<button type="submit" className="btn btn-primary">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
