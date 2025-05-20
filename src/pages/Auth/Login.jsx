import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import SiteTitle from "../../components/SiteTitle";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div className='card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl my-12'>
			<SiteTitle>Login</SiteTitle>
			<div className='card-body'>
				<h1 className='text-4xl font-bold my-4 text-center'>Login Now</h1>
				<form className='fieldset'>
					<label className='label'>Email</label>
					<input
						type='email'
						name='email'
						className='input'
						placeholder='Email'
						required
					/>
					<div className='relative'>
						<label className='label'>Password</label>
						<input
							type={showPassword ? "text" : "password"}
							name='password'
							className='input'
							placeholder='Password'
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
					<button className='btn btn-neutral btn-outline w-full'>
						{" "}
						<FaGoogle /> Login with Google
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
