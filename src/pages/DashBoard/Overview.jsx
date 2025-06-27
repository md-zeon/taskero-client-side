import { use, useEffect, useState } from "react";
import { FaTasks, FaDollarSign, FaClock, FaUserEdit } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";
import SiteTitle from "../../components/SiteTitle";
import Loader from "../../components/Loader";

const Overview = () => {
	const { user } = use(AuthContext);
	const [tasks, setTasks] = useState([]);
	const totalTasks = useLoaderData();
	const [loading, setLoading] = useState(true);
	const [stats, setStats] = useState({ posted: 0, bids: 0, total: 0 });

	useEffect(() => {
		if (user?.email) {
			fetch(`https://taskero-server.vercel.app/tasks?email=${user.email}`)
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

	return (
		<div
			className='max-w-7xl mx-auto px-4 py-10'
			data-aos='fade-up'
		>
			<SiteTitle>Dashboard Overview</SiteTitle>
			<h2 className='text-3xl font-bold text-primary mb-8 flex items-center gap-2'>
				<FaTasks /> Dashboard Overview
			</h2>

			{/* Profile */}
			<div
				className='card bg-base-100 shadow-lg border border-primary mb-8'
				data-aos='fade-up'
				data-aos-delay='100'
			>
				<div className='card-body flex flex-col md:flex-row items-center gap-6'>
					<div className='avatar'>
						<div className='w-24 rounded-full'>
							<img
								src={user?.photoURL || "https://img.icons8.com/fluency-systems-regular/48/user-male-circle--v1.png"}
								alt='Profile'
							/>
						</div>
					</div>
					<div>
						<h3 className='text-xl font-semibold text-primary'>{user?.displayName}</h3>
						<p className='text-base-content'>{user?.email}</p>
						<Link
							to='/dashboard/edit-profile'
							className='btn btn-sm btn-outline btn-primary mt-4 flex items-center gap-2'
						>
							<FaUserEdit /> Edit Profile
						</Link>
					</div>
				</div>
			</div>

			{/* Task Statistics */}
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
				<div
					className='card bg-base-200 shadow-md border border-primary'
					data-aos='zoom-in'
					data-aos-delay='200'
				>
					<div className='card-body text-center'>
						<h3 className='text-lg font-semibold text-primary'>Tasks Posted</h3>
						<p className='text-2xl font-bold'>{stats.posted}</p>
					</div>
				</div>
				<div
					className='card bg-base-200 shadow-md border border-primary'
					data-aos='zoom-in'
					data-aos-delay='300'
				>
					<div className='card-body text-center'>
						<h3 className='text-lg font-semibold text-primary'>Bids Received</h3>
						<p className='text-2xl font-bold'>{stats.bids}</p>
					</div>
				</div>
				<div
					className='card bg-base-200 shadow-md border border-primary'
					data-aos='zoom-in'
					data-aos-delay='400'
				>
					<div className='card-body text-center'>
						<h3 className='text-lg font-semibold text-primary'>Total Tasks</h3>
						<p className='text-2xl font-bold'>{stats.total}</p>
					</div>
				</div>
			</div>

			{/* Recent Tasks */}
			<div
				className='card bg-base-100 shadow-lg border border-primary'
				data-aos='fade-up'
				data-aos-delay='500'
			>
				<div className='card-body'>
					<h3 className='text-xl font-semibold text-primary mb-4'>Recent Tasks</h3>
					{tasks.length === 0 ? (
						<p className='text-center text-base-content'>No tasks posted yet.</p>
					) : (
						<div className='overflow-x-auto'>
							<table className='table table-zebra w-full text-sm'>
								<thead className='bg-base-300 text-base-content'>
									<tr>
										<th>#</th>
										<th>Title</th>
										<th>Category</th>
										<th>
											<FaClock className='inline mr-1' /> Deadline
										</th>
										<th>
											<FaDollarSign className='inline mr-1' /> Budget
										</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									{tasks.slice(0, 5).map((task, idx) => (
										<tr key={task._id}>
											<td>{idx + 1}</td>
											<td className='font-semibold'>{task.title}</td>
											<td>{task.category}</td>
											<td>{new Date(task.deadline).toLocaleDateString()}</td>
											<td>${task.budget}</td>
											<td>
												<Link
													to={`/task/${task._id}`}
													className='btn btn-xs btn-outline btn-primary'
												>
													View
												</Link>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Overview;
