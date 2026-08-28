import { use, useState } from "react";
import {
	CheckSquare2,
	Menu,
	Plus,
	LayoutDashboard,
	ClipboardList,
	LogOut,
	UserCog,
	LogIn,
	UserPlus,
	ChevronDown,
} from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";
import ThemeController from "./ThemeController";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const publicLinks = [
	{ to: "/", label: "Home" },
	{ to: "/browse-tasks", label: "Browse Tasks" },
	{ to: "/about-us", label: "About" },
	{ to: "/contact-us", label: "Contact" },
];

const userLinks = [
	{ to: "/dashboard", label: "Overview", icon: <LayoutDashboard className='size-4' /> },
	{ to: "/dashboard/my-tasks", label: "My Tasks", icon: <ClipboardList className='size-4' /> },
];

const Logo = () => (
	<Link to='/' className='flex items-center gap-2' aria-label='Taskero home'>
		<span className='grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground'>
			<CheckSquare2 className='size-5' />
		</span>
		<span className='text-xl font-extrabold tracking-tight'>Taskero</span>
	</Link>
);

const Navbar = () => {
	const { user, logout } = use(AuthContext);
	const navigate = useNavigate();
	const [mobileOpen, setMobileOpen] = useState(false);

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

	return (
		<header className='sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md'>
			<div className='container-tight flex h-16 items-center justify-between gap-4'>
				<Logo />

				{/* Desktop nav */}
				<nav className='hidden items-center gap-1 lg:flex'>
					{publicLinks.map((link) => (
						<NavLink
							key={link.to}
							to={link.to}
							end={link.to === "/"}
							className={({ isActive }) =>
								cn(
									"rounded-md px-3 py-2 text-sm font-medium transition-colors",
									isActive
										? "text-primary"
										: "text-muted-foreground hover:text-foreground",
								)
							}
						>
							{link.label}
						</NavLink>
					))}
				</nav>

				<div className='flex items-center gap-1.5'>
					<ThemeController />

					{user ? (
						<>
							<Button asChild className='hidden md:inline-flex'>
								<Link to='/dashboard/add-task'>
									<Plus className='size-4' /> Add Task
								</Link>
							</Button>

							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<button className='ml-1 flex items-center gap-1.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 cursor-pointer'>
										<Avatar className='size-9'>
											<AvatarImage
												src={user?.photoURL}
												alt={user?.displayName || "Profile"}
											/>
											<AvatarFallback>
												{(user?.displayName || user?.email || "U")
													.slice(0, 2)
													.toUpperCase()}
											</AvatarFallback>
										</Avatar>
										<ChevronDown className='hidden size-4 text-muted-foreground sm:block' />
									</button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align='end' className='w-56'>
									<DropdownMenuLabel className='flex flex-col gap-0.5'>
										<span className='truncate font-semibold'>
											{user?.displayName || "Account"}
										</span>
										<span className='truncate text-xs font-normal text-muted-foreground'>
											{user?.email}
										</span>
									</DropdownMenuLabel>
									<DropdownMenuSeparator />
									{userLinks.map((link) => (
										<DropdownMenuItem asChild key={link.to}>
											<NavLink to={link.to}>
												{link.icon}
												{link.label}
											</NavLink>
										</DropdownMenuItem>
									))}
									<DropdownMenuItem asChild>
										<NavLink to='/dashboard/edit-profile'>
											<UserCog className='size-4' /> Edit Profile
										</NavLink>
									</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem
										variant='destructive'
										onClick={handleLogout}
									>
										<LogOut className='size-4' /> Logout
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</>
					) : (
						<div className='hidden items-center gap-2 sm:flex'>
							<Button asChild variant='ghost'>
								<Link to='/login'>
									<LogIn className='size-4' /> Login
								</Link>
							</Button>
							<Button asChild>
								<Link to='/signup'>
									<UserPlus className='size-4' /> Sign Up
								</Link>
							</Button>
						</div>
					)}

					{/* Mobile menu */}
					<Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
						<SheetTrigger asChild className='lg:hidden'>
							<Button variant='ghost' size='icon' aria-label='Open menu'>
								<Menu className='size-5' />
							</Button>
						</SheetTrigger>
						<SheetContent side='right' className='w-72'>
							<SheetHeader>
								<SheetTitle className='text-left'>Menu</SheetTitle>
							</SheetHeader>
							<div className='flex flex-col gap-1 px-2'>
								{publicLinks.map((link) => (
									<NavLink
										key={link.to}
										to={link.to}
										end={link.to === "/"}
										onClick={() => setMobileOpen(false)}
										className={({ isActive }) =>
											cn(
												"rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
												isActive
													? "bg-accent text-accent-foreground"
													: "text-muted-foreground hover:bg-accent hover:text-foreground",
											)
										}
									>
										{link.label}
									</NavLink>
								))}
								{user && (
									<>
										<div className='my-2 h-px bg-border' />
										{userLinks.map((link) => (
											<NavLink
												key={link.to}
												to={link.to}
												onClick={() => setMobileOpen(false)}
												className='flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground'
											>
												{link.icon}
												{link.label}
											</NavLink>
										))}
										<button
											onClick={() => {
												setMobileOpen(false);
												handleLogout();
											}}
											className='flex items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm font-medium text-destructive hover:bg-destructive/10'
										>
											<LogOut className='size-4' /> Logout
										</button>
									</>
								)}
							</div>
							{!user && (
								<div className='mt-4 flex flex-col gap-2 px-4'>
									<Button asChild onClick={() => setMobileOpen(false)}>
										<Link to='/signup'>
											<UserPlus className='size-4' /> Sign Up
										</Link>
									</Button>
									<Button asChild variant='outline' onClick={() => setMobileOpen(false)}>
										<Link to='/login'>
											<LogIn className='size-4' /> Login
										</Link>
									</Button>
								</div>
							)}
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
