import { Link } from "react-router";
import { FaBriefcase, FaClock, FaDollarSign, FaUser } from "react-icons/fa";

const FeaturedTasks = ({ tasks }) => {
	return (
		<section
			className='pb-10  rounded-2xl'
			data-aos='fade-up'
			data-aos-delay='100'
		>
			<h2 className='text-3xl font-bold text-center text-primary mb-12 flex items-center justify-center gap-2'>
				<FaBriefcase /> Featured Tasks
			</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{tasks.length > 0 ? (
					tasks.map((task) => (
						<div
							key={task._id}
							className='card bg-base-200 shadow-inner hover:shadow-primary border border-base-300'
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
								<div className='flex items-center justify-between mt-4'>
									<Link
										to={`/task/${task._id}`}
										className='btn btn-sm btn-outline btn-primary'
									>
										See Details
									</Link>
									<span className='flex items-center gap-1 font-bold text-primary'>
										<FaDollarSign /> {task.budget}
									</span>
								</div>
							</div>
						</div>
					))
				) : (
					<p className='text-center col-span-full text-gray-500'>No tasks available.</p>
				)}
			</div>
		</section>
	);
};

export default FeaturedTasks;
