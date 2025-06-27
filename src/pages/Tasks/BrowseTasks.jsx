import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { FaSearch, FaBriefcase, FaClock, FaDollarSign, FaUser, FaFilter } from "react-icons/fa";
import SiteTitle from "../../components/SiteTitle";

const BrowseTasks = () => {
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
		<div className='max-w-7xl mx-auto py-10'>
			<SiteTitle>Browse Tasks</SiteTitle>
			<h2
				className='text-3xl font-bold text-center text-primary mb-8 flex items-center justify-center gap-2'
				data-aos='fade-down'
			>
				<FaSearch /> Browse Freelance Tasks
			</h2>

			<div
				className='flex flex-wrap justify-center gap-3 mb-8'
				data-aos='fade-up'
			>
				{categories?.map((cat) => (
					<button
						key={cat}
						className={`btn btn-sm ${category === cat ? "btn-primary" : "btn-outline"}`}
						onClick={() => setCategory(cat)}
					>
						{cat}
					</button>
				))}
			</div>

			<div className='flex justify-end mb-8 text-primary'>
				<div></div>
				<div className='flex gap-2'>
					<label className='block text-sm font-medium text-gray-700 mb-2'>
						<FaFilter className='inline text-primary' /> Sort by Budget
					</label>
					<select
						className='select select-bordered'
						defaultValue={sortOrder}
						onChange={(e) => setSortOrder(e.target.value)}
					>
						<option value='none' disabled={true}>No Sort</option>
						<option value='asc'>Ascending</option>
						<option value='desc'>Descending</option>
					</select>
				</div>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
				{filtered?.length > 0 ? (
					filtered?.map((task) => (
						<div
							key={task._id}
							className='card bg-base-200 shadow-lg border border-base-300'
							data-aos='zoom-in'
						>
							<div className='card-body'>
								<h3 className='card-title text-xl font-semibold text-primary'>{task.title}</h3>
								<p className='text-sm text-gray-500 flex items-center gap-1'>
									<FaBriefcase /> {task.category}
								</p>
								<p className='text-sm text-gray-500 flex items-center gap-1'>
									<FaUser /> Posted by: {task.userName}
								</p>
								<p className='text-sm text-gray-500 flex items-center gap-1'>
									<FaClock /> Deadline: {new Date(task.deadline).toLocaleDateString()}
								</p>
								<p className='text-sm text-gray-600 mt-2'>{task.description.slice(0, 100)}...</p>

								<div className='flex items-center justify-between mt-4'>
									<span className='flex items-center gap-1 font-bold text-accent'>
										<FaDollarSign /> {task.budget}
									</span>
									<Link
										to={`/task/${task._id}`}
										className='btn btn-sm btn-outline btn-primary'
									>
										See Details
									</Link>
								</div>
							</div>
						</div>
					))
				) : (
					<p className='text-center col-span-full text-gray-500'>No tasks found in this category.</p>
				)}
			</div>
		</div>
	);
};

export default BrowseTasks;
