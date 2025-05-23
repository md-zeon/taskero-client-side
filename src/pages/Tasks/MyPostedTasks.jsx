import { use, useEffect, useState } from "react";
import { FaEdit, FaTrashAlt, FaClock, FaDollarSign, FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link } from "react-router";
import AuthContext from "../../context/AuthContext";
import Loader from "../../components/Loader";
import Swal from "sweetalert2";
import SiteTitle from "../../components/SiteTitle";

const MyPostedTasks = () => {
	const { user } = use(AuthContext);
	const [tasks, setTasks] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (user?.email) {
			fetch(`https://taskero-server.vercel.app/tasks?email=${user.email}`)
				.then((res) => res.json())
				.then((data) => {
					setTasks(data);
					setLoading(false);
				});
		}
	}, [user]);

	const handleDelete = async (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://taskero-server.vercel.app/tasks/${id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							setTasks(tasks.filter((task) => task._id !== id));
							Swal.fire({
								title: "Deleted!",
								text: "Your task has been deleted.",
								icon: "success",
							});
						} else {
							Swal.fire({
								title: "Error!",
								text: "Failed to delete task.",
								icon: "error",
							});
						}
					});
			} else {
				toast.error("Task deletion canceled.");
			}
		});
	};

	const handleBids = (task) => {
		toast.info(`Total Bids: ${task?.bidsCount || 0}`);
	};

	if (loading) {
		return <Loader />;
	}

	return (
		<div data-aos='fade-up' className='max-w-6xl mx-auto p-6 mt-10'>
			<SiteTitle>My Posted Tasks</SiteTitle>
			<h2 className='text-3xl font-bold mb-8 text-center'>My Posted Tasks</h2>

			{tasks.length === 0 ? (
				<p className='text-center text-gray-500'>You haven't posted any tasks yet.</p>
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
							{tasks.map((task, idx) => (
								<tr key={task._id}>
									<td>{idx + 1}</td>
									<td className='font-semibold'>{task.title}</td>
									<td>{task.category}</td>
									<td>{new Date(task.deadline).toLocaleDateString()}</td>
									<td>${task.budget}</td>
									<td>
										<div className='flex gap-2 flex-wrap'>
											<Link to={`/edit-task/${task._id}`}>
												<button className='btn btn-xs btn-outline btn-info flex items-center gap-1'>
													<FaEdit /> Edit
												</button>
											</Link>
											<button
												onClick={() => handleDelete(task._id)}
												className='btn btn-xs btn-outline btn-error flex items-center gap-1'
											>
												<FaTrashAlt /> Delete
											</button>
											<button
												onClick={() => handleBids(task)}
												className='btn btn-xs btn-outline btn-primary flex items-center gap-1'
											>
												<FaEye /> Bids
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default MyPostedTasks;
