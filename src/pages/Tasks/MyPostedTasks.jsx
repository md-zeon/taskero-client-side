import { use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router";
import { Plus } from "lucide-react";
import AuthContext from "../../context/AuthContext";
import Loader from "../../components/Loader";
import SiteTitle from "../../components/SiteTitle";
import TaskActionsTable from "../../components/TaskActionsTable";
import { tasksUrl } from "../../config/api";
import { Button } from "@/components/ui/button";

const MyPostedTasks = () => {
	const { user } = use(AuthContext);
	const [tasks, setTasks] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (user?.email) {
			fetch(tasksUrl(`?email=${user.email}`))
				.then((res) => res.json())
				.then((data) => {
					setTasks(data);
				})
				.catch(() => toast.error("Failed to load your tasks."))
				.finally(() => setLoading(false));
		}
	}, [user]);

	if (loading) {
		return <Loader />;
	}

	return (
		<div className='mx-auto max-w-360 px-4 py-10'>
			<SiteTitle>My Posted Tasks</SiteTitle>

			<div className='mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
				<div>
					<h2 className='mb-1 text-3xl font-bold tracking-tight'>
						My Posted Tasks
					</h2>
					<p className='text-muted-foreground'>
						Manage the tasks you've posted.
					</p>
				</div>
				<Button asChild>
					<Link to='/dashboard/add-task'>
						<Plus className='size-4' /> Add New Task
					</Link>
				</Button>
			</div>

			<div className='rounded-2xl border bg-card p-4 shadow-sm sm:p-6'>
				<TaskActionsTable
					tasks={tasks}
					onDeleted={(id) => setTasks(tasks.filter((t) => t._id !== id))}
					emptyMessage="You haven't posted any tasks yet. Click 'Add New Task' to get started."
				/>
			</div>
		</div>
	);
};

export default MyPostedTasks;
