import { use, useState } from "react";
import { NavLink, Outlet, useNavigate, useNavigation } from "react-router";
import {
	LayoutDashboard,
	ClipboardList,
	Plus,
	LogOut,
	UserCog,
	Menu,
	List,
	CheckSquare2,
} from "lucide-react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import AuthContext from "../context/AuthContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const DashBoardLayout = () => {
	const { user, logout, loading } = use(AuthContext);
	const { state } = useNavigation();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const navigate = useNavigate();

	const navItems = [
		{ to: "/dashboard", label: "Overview", icon: <LayoutDashboard className='size-4' />, end: true, private: true },
		{ to: "/dashboard/all-tasks", label: "All Tasks", icon: <List className='size-4' />, private: false },
		{ to: "/dashboard/my-tasks", label: "My Tasks", icon: <ClipboardList className='size-4' />, private: true },
		{ to: "/dashboard/add-task", label: "Add Task", icon: <Plus className='size-4' />, private: true },
		{ to: "/dashboard/edit-profile", label: "Edit Profile", icon: <UserCog className='size-4' />, private: true },
	];

	const handleLogout = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "You want to logout?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#b45309",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, logout!",
		}).then((result) => {
			if (result.isConfirmed) {
				logout()
					.then(() => {
						Swal.fire("Logged out!", "You have logged out successfully.", "success");
						navigate("/");
					})
					.catch((error) => toast.error(error.message));
			}
		});
	};

	if (loading) return <Loader />;

	const linkClass = ({ isActive }) =>
		cn(
			"flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
			isActive
				? "bg-accent text-accent-foreground"
				: "text-muted-foreground hover:bg-accent hover:text-foreground",
		);

	const sidebarContent = (
		<div className='flex h-full flex-col p-4'>
			<NavLink to='/' className='mb-6 flex items-center gap-2 px-2'>
				<span className='grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground'>
					<CheckSquare2 className='size-5' />
				</span>
				<span className='text-xl font-extrabold tracking-tight'>Taskero</span>
			</NavLink>

			{/* User card */}
			<div className='mb-4 flex items-center gap-3 rounded-xl border bg-card p-3'>
				<Avatar className='size-11'>
					<AvatarImage src={user?.photoURL} alt={user?.displayName || "Profile"} />
					<AvatarFallback>
						{(user?.displayName || user?.email || "U").slice(0, 2).toUpperCase()}
					</AvatarFallback>
				</Avatar>
				<div className='min-w-0'>
					<h3 className='truncate text-sm font-semibold'>
						{user?.displayName || "Account"}
					</h3>
					<p className='truncate text-xs text-muted-foreground'>{user?.email}</p>
				</div>
			</div>

			<nav className='flex-1 space-y-1'>
				{navItems.map((item) =>
					item.private && !user ? null : (
						<NavLink
							key={item.to}
							to={item.to}
							end={item.end}
							onClick={() => setIsSidebarOpen(false)}
							className={linkClass}
						>
							{item.icon}
							{item.label}
						</NavLink>
					),
				)}
			</nav>

			<div className='mt-4 border-t pt-3'>
				{user ? (
					<Button
						variant='ghost'
						className='w-full justify-start text-destructive hover:bg-destructive/10 hover:text-destructive'
						onClick={handleLogout}
					>
						<LogOut className='size-4' /> Logout
					</Button>
				) : (
					<Button
						variant='ghost'
						className='w-full justify-start'
						onClick={() => {
							setIsSidebarOpen(false);
							navigate("/login");
						}}
					>
						<LogOut className='size-4' /> Login
					</Button>
				)}
			</div>
		</div>
	);

	return (
		<div className='flex min-h-screen bg-background'>
			{/* Desktop sidebar */}
			<aside className='sticky top-0 hidden h-screen w-64 shrink-0 border-r bg-muted/40 lg:block'>
				{sidebarContent}
			</aside>

			{/* Mobile drawer */}
			{isSidebarOpen && (
				<div className='fixed inset-0 z-40 lg:hidden'>
					<div
						className='absolute inset-0 bg-black/40 backdrop-blur-sm'
						onClick={() => setIsSidebarOpen(false)}
					/>
					<aside className='absolute inset-y-0 left-0 w-72 border-r bg-background shadow-2xl'>
						{sidebarContent}
					</aside>
				</div>
			)}

			{/* Main content */}
			<div className='min-w-0 flex-1'>
				<div className='flex items-center justify-between border-b bg-background/80 px-4 py-3 backdrop-blur-md lg:hidden'>
					<h2 className='text-lg font-bold'>Dashboard</h2>
					<Button variant='ghost' size='icon' onClick={() => setIsSidebarOpen(true)} aria-label='Open menu'>
						<Menu className='size-5' />
					</Button>
				</div>
				<main className='p-4 lg:p-8'>
					{state === "loading" ? <Loader /> : <Outlet />}
				</main>
			</div>
		</div>
	);
};

export default DashBoardLayout;
