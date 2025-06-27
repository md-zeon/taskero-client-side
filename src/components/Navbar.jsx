import { use } from "react";
import { CgGoogleTasks } from "react-icons/cg";
import { Link, NavLink } from "react-router";
import AuthContext from "../context/AuthContext";
import ThemeController from "./ThemeController";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Navbar = () => {
	const { user, logout } = use(AuthContext);
	const links = (
		<>
			<li>
				<NavLink to='/'>Home</NavLink>
			</li>
			{user && (
				<li>
					<NavLink to='/add-task'>Add Task</NavLink>
				</li>
			)}
			<li>
				<NavLink to='/browse-tasks'>Browse Tasks</NavLink>
			</li>
			{user && (
				<li>
					<NavLink to='/my-posted-tasks'>My Posted Tasks</NavLink>
				</li>
			)}
		</>
	);

	const handleLogout = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "You want to logout?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, logout!",
		}).then((result) => {
			if (result.isConfirmed) {
				logout()
					.then(() => {
						Swal.fire({
							title: "Logged out!",
							text: "You have logged out successfully.",
							icon: "success",
						});
					})
					.catch((error) => {
						toast.error(error.message);
					});
			}
		});
	};

	return (
		<div className='navbar bg-base-100 px-4 max-w-7xl mx-auto'>
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
						<div className='flex gap-2 mt-2'>
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
					</ul>
				</div>
				<Link
					to='/'
					className='text-2xl flex gap-1 items-center'
				>
					{/* Logo */}
					<CgGoogleTasks className='animate-pulse text-primary' />
					{/* Name */}
					<span className='font-bold hover:text-primary transition-colors duration-300'>Taskero</span>
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
					<div className='dropdown dropdown-end group z-50'>
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

				<div className='hidden sm:flex items-center gap-2'>
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
		</div>
	);
};

export default Navbar;
