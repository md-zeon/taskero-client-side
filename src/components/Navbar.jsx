import { use } from "react";
import { CgGoogleTasks } from "react-icons/cg";
import { Link, NavLink } from "react-router";
import AuthContext from "../context/AuthContext";
import ThemeController from "./ThemeController";
import { toast } from "react-toastify";

const Navbar = () => {
	const { user, logout } = use(AuthContext);
	const links = (
		<>
			<li>
				<NavLink to='/'>Home</NavLink>
			</li>
			<li>
				<NavLink to='/add-task'>Add Task</NavLink>
			</li>
			<li>
				<NavLink to='/browse-tasks'>Browse Tasks</NavLink>
			</li>
			<li>
				<NavLink to='/my-posted-tasks'>My Posted Tasks</NavLink>
			</li>
		</>
	);

	const handleLogout = () => {
		logout()
			.then(() => {
				toast.success("Logout successful!");
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	return (
		<div className='navbar bg-base-100 shadow-sm'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<div
						tabIndex={0}
						role='button'
						className='btn lg:hidden'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							{" "}
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>{" "}
						</svg>
					</div>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
					>
						{links}
					</ul>
				</div>
				<Link
					to='/'
					className='text-xl flex gap-1 items-center'
				>
					{/* Logo */}
					<CgGoogleTasks />
					{/* Name */}
					<span className='font-bold'>Taskero</span>
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>{links}</ul>
			</div>
			<div className='navbar-end space-x-2'>
				{/* Theme Controller */}
				<ThemeController />
				{/* User Profile */}
				{user && (
					<div className='dropdown dropdown-end group'>
						<div className='btn btn-ghost btn-circle avatar'>
							<div className='w-8 rounded-full'>
								<img
									alt='Profile Picture'
									src={user?.photoURL || "https://img.icons8.com/fluency-systems-regular/48/user-male-circle--v1.png"}
								/>
							</div>
						</div>
						<div className='card absolute right-5 top-14 bg-base-100 shadow hidden group-hover:flex'>
							<div className='card-body px-5 py-3'>
								<span className='font-bold text-lg'>{user?.displayName}</span>
							</div>
						</div>
					</div>
				)}

				{user ? (
					<button
						onClick={handleLogout}
						className='btn btn-primary'
					>
						Logout
					</button>
				) : (
					<>
						{/* Login and Signup */}
						<Link
							to='/login'
							className='btn btn-primary'
						>
							Login
						</Link>
						<Link
							to='/signup'
							className='btn btn-primary btn-outline'
						>
							Sign Up
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default Navbar;
