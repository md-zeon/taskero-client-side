import { useState, use } from "react";
import { NavLink, Outlet, useNavigate, useNavigation } from "react-router";
import { FaHome, FaTasks, FaList, FaPlus, FaSignOutAlt, FaBars, FaTimes, FaUser, FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import AuthContext from "../context/AuthContext";

const DashBoardLayout = () => {
	const { user, logout, loading } = use(AuthContext);
	const { state } = useNavigation();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const navigate = useNavigate();

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
						Swal.fire("Logged out!", "You have logged out successfully.", "success");
					})
					.catch((error) => toast.error(error.message));
			}
		});
	};

	if (loading) return <Loader />;

	return (
		<div className='min-h-screen max-w-7xl mx-auto flex flex-col lg:flex-row bg-base-100'>
			{/* Mobile Navbar Toggle */}
			<div className='sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-base-200 lg:hidden'>
				<h2 className='text-xl font-bold text-primary'>Taskero Dashboard</h2>
				<button
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className='text-xl text-primary'
				>
					{isSidebarOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>

			{/* Sidebar */}
			<aside
				className={`fixed lg:sticky top-0 z-30 bg-base-200 shadow-md w-72 p-6 transform lg:translate-x-0 transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:block h-screen overflow-y-auto`}
			>
				{user ? (
					<div className='flex items-center gap-2 mb-6'>
						<img
							src={user?.photoURL}
							alt='Profile'
							className='w-12 h-12 rounded-full'
						/>
						<div>
							<h3 className='text-lg font-semibold text-primary'>{user?.displayName}</h3>
							<p className='text-sm text-base-content break-all'>{user?.email}</p>
						</div>
					</div>
				) : (
					<div className='flex items-center gap-2 mb-6'>
						<div className='rounded-full border border-primary p-2 text-primary'>
							<FaUser />
						</div>
						<div>
							<h3 className='text-lg font-semibold text-primary'>DashBoard</h3>
						</div>
					</div>
				)}

				<ul className='menu dashboard-menu space-y-2'>
					<li>
						<NavLink
							to='/'
							className='flex items-center gap-2'
						>
							<FaHome /> Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/dashboard'
							end
							className='flex items-center gap-2'
						>
							<FaTasks /> Overview
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/dashboard/all-tasks'
							className='flex items-center gap-2'
						>
							<FaList /> All Tasks
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/dashboard/my-tasks'
							className='flex items-center gap-2'
						>
							<FaTasks /> My Tasks
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/dashboard/add-task'
							className='flex items-center gap-2'
						>
							<FaPlus /> Add Task
						</NavLink>
					</li>
					{user ? (
						<li>
							<button
								onClick={handleLogout}
								className='flex items-center gap-2 text-error'
							>
								<FaSignOutAlt /> Logout
							</button>
						</li>
					) : (
						<li>
							<button
								className='flex items-center gap-2 text-primary'
								onClick={() => navigate("/login")}
							>
								<FaSignInAlt /> Login
							</button>
						</li>
					)}
				</ul>
			</aside>

			{/* Main Content */}
			<main className='flex-1 p-4 lg:p-6'>{state === "loading" ? <Loader /> : <Outlet />}</main>
		</div>
	);
};

export default DashBoardLayout;
