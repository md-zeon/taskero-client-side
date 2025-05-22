import { use, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import SiteTitle from "../../components/SiteTitle";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const { signIn, signInWithGoogle } = use(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		signIn(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				toast.success(`Login successful! Welcome ${user.displayName}`);
				form.reset();
				navigate(location?.state || "/");
			})
			.catch((error) => {
				console.log(error);
				toast.error(error.message);
			});
	};

	const handleGoogleLogin = () => {
		signInWithGoogle()
			.then((result) => {
				const user = result.user;
				console.log(user);
				toast.success(`Login successful! Welcome ${user.displayName}`);
				navigate(location?.state || "/");
			})
			.catch((error) => {
				console.log(error);
				toast.error(error.message);
			});
	};

	return (
		<div
			className='card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl my-12'
			data-aos='fade-up'
		>
			<SiteTitle>Login</SiteTitle>
			<div className='card-body'>
				<h1 className='text-4xl font-bold my-4 text-center'>Login Now</h1>
				<form
					onSubmit={handleLogin}
					className='fieldset'
				>
					<label className='label'>Email</label>
					<input
						type='email'
						name='email'
						className='input'
						placeholder='Email'
						autoComplete='email'
						required
					/>
					<div className='relative'>
						<label className='label'>Password</label>
						<input
							type={showPassword ? "text" : "password"}
							name='password'
							className='input'
							placeholder='Password'
							autoComplete='current-password'
							required
						/>
						<span
							onClick={() => setShowPassword(!showPassword)}
							className='absolute top-7 z-10 right-8 text-lg cursor-pointer'
						>
							{showPassword ? <FaEyeSlash /> : <FaEye />}
						</span>
					</div>
					<div>
						<p>
							Already have an account? Please{" "}
							<Link
								to='/signup'
								className='text-primary underline'
							>
								Sign Up
							</Link>
						</p>
					</div>
					<button className='btn btn-neutral mt-4'>Login</button>
				</form>
				<div className='divider'>OR</div>
				<div>
					<button
						onClick={handleGoogleLogin}
						className='btn btn-neutral btn-outline w-full'
					>
						{" "}
						<FaGoogle /> Login with Google
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
