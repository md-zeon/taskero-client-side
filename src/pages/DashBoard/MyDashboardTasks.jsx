import { use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";
import Loader from "../../components/Loader";
import SiteTitle from "../../components/SiteTitle";
import TaskActionsTable from "../../components/TaskActionsTable";
import { tasksUrl } from "../../config/api";

const MyDashboardTasks = () => {
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
			<SiteTitle>My Tasks</SiteTitle>

			<div className='mb-8'>
				<h2 className='mb-1 text-3xl font-bold tracking-tight'>My Tasks</h2>
				<p className='text-muted-foreground'>
					Manage all the tasks you've posted.
				</p>
			</div>

			<div className='rounded-2xl border bg-card p-4 shadow-sm sm:p-6'>
				<TaskActionsTable
					tasks={tasks}
					onDeleted={(id) => setTasks(tasks.filter((t) => t._id !== id))}
					emptyMessage="You haven't posted any tasks yet."
				/>
			</div>
		</div>
	);
};

export default MyDashboardTasks;
