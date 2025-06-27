import { use } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { FaHome, FaTasks, FaList, FaPlus, FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import AuthContext from "../context/AuthContext";

const DashBoardLayout = () => {
	const { user, logout, loading } = use(AuthContext);
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
						Swal.fire({
							title: "Logged out!",
							text: "You have logged out successfully.",
							icon: "success",
						});
						navigate("/");
					})
					.catch((error) => {
						toast.error(error.message);
					});
			}
		});
	};

	if (loading) {
		return <Loader />;
	}

	return (
		<div className='flex min-h-screen bg-base-100'>
			{/* Sidebar */}
			<aside className='w-max bg-base-200 shadow-md lg:sticky lg:top-0 lg:h-screen'>
				<div className='p-6'>
					<div className='flex items-center gap-2 mb-6'>
						<img
							src={user?.photoURL || "https://img.icons8.com/fluency-systems-regular/48/user-male-circle--v1.png"}
							alt='Profile'
							className='w-12 h-12 rounded-full'
						/>
						<div>
							<h3 className='text-lg font-semibold text-primary'>{user?.displayName}</h3>
							<p className='text-sm text-base-content text-wrap'>{user?.email}</p>
						</div>
					</div>
					<ul className='menu space-y-2'>
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
						<li>
							<button
								onClick={handleLogout}
								className='flex items-center gap-2 text-error'
							>
								<FaSignOutAlt /> Logout
							</button>
						</li>
					</ul>
				</div>
			</aside>

			{/* Main Content */}
			<div className='flex-1 p-6'>
				<Outlet />
			</div>
		</div>
	);
};

export default DashBoardLayout;
