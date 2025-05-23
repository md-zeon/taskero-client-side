import { use, useEffect, useState } from "react";
import { FaEdit, FaTrashAlt, FaClock, FaDollarSign } from "react-icons/fa";
import { toast } from "react-toastify";

import { Link } from "react-router";
import AuthContext from "../../context/AuthContext";
import Loader from "../../components/Loader";
import Swal from "sweetalert2";

const MyPostedTasks = () => {
	const { user } = use(AuthContext);
	const [tasks, setTasks] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (user?.email) {
			fetch(`http://localhost:5000/tasks?email=${user.email}`)
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
				fetch(`http://localhost:5000/tasks/${id}`, {
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

	if (loading) {
		return <Loader />;
	}

	return (
		<div className='max-w-5xl mx-auto p-6 mt-10'>
			<h2 className='text-3xl font-bold mb-6 text-center'>My Posted Tasks</h2>

			{tasks.length === 0 ? (
				<p className='text-center text-gray-500'>You haven't posted any tasks yet.</p>
			) : (
				<div className='grid md:grid-cols-2 gap-6'>
					{tasks.map((task) => (
						<div
							key={task._id}
							className='bg-base-200 rounded-lg p-5 shadow-lg space-y-2'
							data-aos='fade-up'
						>
							<h3 className='text-xl font-semibold'>{task.title}</h3>
							<p className='text-sm text-gray-500'>{task.category}</p>
							<p className='flex items-center gap-2 text-sm'>
								<FaClock /> Deadline:{" "}
								<span className='font-medium'>{new Date(task.deadline).toLocaleDateString()}</span>
							</p>
							<p className='flex items-center gap-2 text-sm'>
								<FaDollarSign /> Budget: ${task.budget}
							</p>
							<div className='flex gap-3 mt-4'>
								<Link to={`/edit-task/${task._id}`}>
									<button className='btn btn-sm btn-outline btn-info flex items-center gap-1'>
										<FaEdit /> Edit
									</button>
								</Link>
								<button
									onClick={() => handleDelete(task._id)}
									className='btn btn-sm btn-outline btn-error flex items-center gap-1'
								>
									<FaTrashAlt /> Delete
								</button>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default MyPostedTasks;
