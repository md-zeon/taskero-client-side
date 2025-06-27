import { useEffect, useState } from "react";
import { FaFire, FaBriefcase, FaDollarSign, FaGavel } from "react-icons/fa";
import { Link } from "react-router";
import Loader from "../../components/Loader";

const HighlightedTasks = () => {
	const [highlightedTasks, setHighlightedTasks] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch("https://taskero-server.vercel.app/tasks?limit=4&sort=bidsCount")
			.then((res) => res.json())
			.then((data) => {
				setHighlightedTasks(data);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<section
			className='py-10'
			data-aos='fade-up'
		>
			<h2 className='text-3xl font-bold text-center text-primary mb-4 flex items-center justify-center gap-2'>
				<FaFire className='text-primary' /> Highlighted Tasks
			</h2>
			<p className='text-center text-gray-600 max-w-2xl mb-12 mx-auto'>
				Discover tasks that are attracting the most bids — popular opportunities with strong engagement from top
				freelancers.
			</p>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
				{highlightedTasks.map((task) => (
					<div
						key={task._id}
						className='backdrop-blur-md bg-white/20 border border-primary/20 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative h-full'
						style={{
							background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
						}}
						data-aos='zoom-in'
					>
						<div className='flex flex-col h-full justify-between'>
							<div>
								<h3 className='text-xl font-bold mb-2 line-clamp-1'>{task.title}</h3>
								<p className='text-sm flex items-center gap-1 mb-1 text-secondary'>
									<FaBriefcase /> {task.category}
								</p>
								<p className='text-sm flex items-center gap-1 mb-1'>
									<FaGavel /> Bids: <span className='font-semibold'>{task.bidsCount || 0}</span>
								</p>
								<p className='text-sm flex items-center gap-1 mb-4'>
									<FaDollarSign /> Budget: <span className='font-semibold'>${task.budget}</span>
								</p>
							</div>
							<Link
								to={`/task/${task._id}`}
								className='btn btn-sm btn-outline btn-primary mt-auto'
							>
								View Task
							</Link>
						</div>
						<div className='absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl-xl font-bold'>
							🔥 Popular
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default HighlightedTasks;
