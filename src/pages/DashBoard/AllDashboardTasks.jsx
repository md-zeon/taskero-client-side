import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { FaSearch, FaBriefcase, FaClock, FaDollarSign, FaUser, FaFilter } from "react-icons/fa";
import SiteTitle from "../../components/SiteTitle";

const AllDashboardTasks = () => {
	const tasks = useLoaderData();
	const [filtered, setFiltered] = useState([]);
	const [category, setCategory] = useState("All");
	const [sortOrder, setSortOrder] = useState("none");

	useEffect(() => {
		let filteredTasks = [...tasks];
		if (category !== "All") {
			filteredTasks = filteredTasks.filter((task) => task.category === category);
		}

		if (sortOrder !== "none") {
			filteredTasks = [...filteredTasks].sort((a, b) =>
				sortOrder === "asc" ? a.budget - b.budget : b.budget - a.budget,
			);
		}
		setFiltered(filteredTasks);
	}, [category, tasks, sortOrder]);

	const categories = ["All", "Web Development", "Design", "Writing", "Marketing", "Data Entry", "Other"];

	return (
		<div className='max-w-7xl mx-auto px-4 my-10 py-6'>
			<SiteTitle>All Tasks</SiteTitle>
			<h2
				className='text-3xl font-bold text-center text-primary mb-8 flex items-center justify-center gap-2'
				data-aos='fade-down'
			>
				<FaSearch /> All Tasks
			</h2>

			{/* Filter and Sort Controls */}
			<div
				className='flex flex-col sm:flex-row justify-between items-center gap-4 mb-8'
				data-aos='fade-up'
			>
				<div className='flex flex-wrap justify-center gap-3'>
					{categories.map((cat) => (
						<button
							key={cat}
							className={`btn btn-sm ${category === cat ? "btn-primary" : "btn-outline"}`}
							onClick={() => setCategory(cat)}
						>
							{cat}
						</button>
					))}
				</div>
				<div className='flex items-center gap-2'>
					<label className='text-sm font-medium text-base-content flex items-center gap-1'>
						<FaFilter className='text-primary' /> Sort by Budget
					</label>
					<select
						className='select select-bordered select-sm'
						value={sortOrder}
						onChange={(e) => setSortOrder(e.target.value)}
					>
						<option value='none'>No Sort</option>
						<option value='asc'>Ascending</option>
						<option value='desc'>Descending</option>
					</select>
				</div>
			</div>

			{/* Tasks Table */}
			<div
				className='overflow-x-auto'
				data-aos='fade-up'
				data-aos-delay='100'
			>
				{filtered.length > 0 ? (
					<table className='table table-zebra w-full text-sm shadow shadow-primary'>
						<thead className='bg-base-300 text-base-content'>
							<tr>
								<th>#</th>
								<th>Title</th>
								<th>Category</th>
								<th>Posted By</th>
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
							{filtered.map((task, idx) => (
								<tr key={task._id}>
									<td>{idx + 1}</td>
									<td className='font-semibold'>{task.title}</td>
									<td>{task.category}</td>
									<td>{task.userName}</td>
									<td>{new Date(task.deadline).toLocaleDateString()}</td>
									<td>${task.budget}</td>
									<td>
										<Link
											to={`/task/${task._id}`}
											className='btn btn-xs btn-outline btn-primary'
										>
											Details
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<p className='text-center text-base-content py-8'>No tasks found in this category.</p>
				)}
			</div>
		</div>
	);
};

export default AllDashboardTasks;
