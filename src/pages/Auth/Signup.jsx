import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const Signup = () => {
	return (
		<div className='card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl my-12'>
			<div className='card-body'>
				<h1 className='text-4xl font-bold my-4 text-center'>Sign Up Now</h1>
				<form className='fieldset'>
					<label className='label'>Name</label>
					<input
						type='text'
						name='name'
						className='input'
						placeholder='Name'
						required
					/>

					<label className='label'>Email</label>
					<input
						type='email'
						name='email'
						className='input'
						placeholder='Email'
						required
					/>
					<label className='label'>photoURL</label>
					<input
						type='text'
						name='photoURL'
						className='input'
						placeholder='Photo URL'
						required
					/>
					<label className='label'>Password</label>
					<input
						type='password'
						name='password'
						className='input'
						placeholder='Password'
						required
					/>
					<div>
						<p>
							Already have an account? Please <Link to='/login' className="text-primary underline">Login</Link>
						</p>
					</div>
					<button className='btn btn-neutral mt-4'>Sign Up</button>
				</form>
                <div className="divider">OR</div>
                <div>
                    <button className="btn btn-neutral btn-outline w-full"> <FaGoogle /> Sign Up with Google</button>
                </div>
			</div>
		</div>
	);
};

export default Signup;
