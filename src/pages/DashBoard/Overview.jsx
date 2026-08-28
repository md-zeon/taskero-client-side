import { use, useEffect, useState } from "react";
import { Briefcase, DollarSign, ClipboardList, UserRound, ArrowUpRight } from "lucide-react";
import { Link, useLoaderData } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";
import SEO from "../../components/SEO";
import Loader from "../../components/Loader";
import DashboardStat from "../../components/DashboardStat";
import { tasksUrl } from "../../config/api";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const Overview = () => {
	const { user } = use(AuthContext);
	const [tasks, setTasks] = useState([]);
	const totalTasks = useLoaderData();
	const [loading, setLoading] = useState(true);
	const [stats, setStats] = useState({ posted: 0, bids: 0, total: 0 });

	useEffect(() => {
		if (user?.email) {
			fetch(tasksUrl(`?email=${user.email}`))
				.then((res) => res.json())
				.then((data) => {
					setTasks(data);
					setStats({
						posted: data.length,
						bids: data.reduce((acc, task) => acc + (task.bidsCount || 0), 0),
						total: totalTasks?.length || 0,
					});
					setLoading(false);
				})
				.catch((err) => {
					console.error(err);
					toast.error("Failed to load user tasks.");
					setLoading(false);
				});
		}
	}, [user, totalTasks]);

	if (loading) {
		return <Loader />;
	}

	const initials = (user?.displayName || "?")
		.split(" ")
		.map((n) => n[0])
		.slice(0, 2)
		.join("")
		.toUpperCase();

	return (
		<div className='mx-auto max-w-360 px-4 py-8'>
			<SEO title='Dashboard Overview'
				description='Get an overview of your Taskero activity, including recent tasks and profile status.'
			/>

			<div className='mb-8'>
				<h2 className='mb-1 text-3xl font-bold tracking-tight'>
					Welcome back, {user?.displayName?.split(" ")[0] || "there"}
				</h2>
				<p className='text-muted-foreground'>
					Here's an overview of your activity on Taskero.
				</p>
			</div>

			<Card className='mb-8'>
				<CardContent className='flex flex-col items-center gap-6 p-6 md:flex-row'>
					<Avatar className='size-20 ring-2 ring-primary/30 ring-offset-2 ring-offset-background'>
						<AvatarImage src={user?.photoURL} alt='Profile' />
						<AvatarFallback className='text-lg'>{initials}</AvatarFallback>
					</Avatar>
					<div className='flex-1 text-center md:text-left'>
						<h3 className='text-xl font-semibold'>{user?.displayName}</h3>
						<p className='text-muted-foreground'>{user?.email}</p>
					</div>
					<Button asChild variant='outline'>
						<Link to='/dashboard/edit-profile'>
							<UserRound className='size-4' /> Edit Profile
						</Link>
					</Button>
				</CardContent>
			</Card>

			<div className='mb-8 grid grid-cols-1 gap-5 sm:grid-cols-3'>
				<DashboardStat
					icon={<Briefcase className='size-6' />}
					label='Tasks Posted'
					value={stats.posted}
				/>
				<DashboardStat
					icon={<DollarSign className='size-6' />}
					label='Bids Received'
					value={stats.bids}
				/>
				<DashboardStat
					icon={<ClipboardList className='size-6' />}
					label='Total Tasks'
					value={stats.total}
				/>
			</div>

			<Card>
				<CardHeader className='flex flex-row items-center justify-between'>
					<CardTitle>Recent Tasks</CardTitle>
					<Button asChild size='sm' variant='ghost'>
						<Link to='/dashboard/my-tasks' className='gap-1'>
							View all <ArrowUpRight className='size-4' />
						</Link>
					</Button>
				</CardHeader>
				<CardContent className='pt-0'>
					{tasks.length === 0 ? (
						<div className='py-10 text-center'>
							<p className='mb-4 text-muted-foreground'>
								You haven't posted any tasks yet.
							</p>
							<Button asChild size='sm'>
								<Link to='/dashboard/add-task'>Post your first task</Link>
							</Button>
						</div>
					) : (
						<Table>
							<TableHeader>
								<TableRow className='hover:bg-transparent'>
									<TableHead>#</TableHead>
									<TableHead>Title</TableHead>
									<TableHead>Category</TableHead>
									<TableHead>Deadline</TableHead>
									<TableHead>Budget</TableHead>
									<TableHead className='text-right'>Actions</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{tasks.slice(0, 5).map((task, idx) => (
									<TableRow key={task._id}>
										<TableCell className='text-muted-foreground'>
											{idx + 1}
										</TableCell>
										<TableCell className='font-semibold'>
											{task.title}
										</TableCell>
										<TableCell>
											<Badge variant='secondary'>{task.category}</Badge>
										</TableCell>
										<TableCell className='text-muted-foreground'>
											{new Date(task.deadline).toLocaleDateString()}
										</TableCell>
										<TableCell className='font-semibold'>
											${task.budget}
										</TableCell>
										<TableCell className='text-right'>
											<Button asChild size='sm' variant='outline'>
												<Link to={`/task/${task._id}`}>View</Link>
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					)}
				</CardContent>
			</Card>
		</div>
	);
};

export default Overview;
