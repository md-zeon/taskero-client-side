import { FaUser, FaEnvelope, FaDollarSign, FaBriefcase, FaClock } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import SiteTitle from "../../components/SiteTitle";

const TaskDetails = () => {
	const task = useLoaderData();

	return (
		<div
			className='max-w-3xl mx-auto bg-base-200 rounded-lg shadow-lg p-8 mt-10'
			data-aos='fade-up'
		>
			<SiteTitle>{task.title}</SiteTitle>
			<h2 className='text-3xl font-bold text-primary mb-4'>{task.title}</h2>

			<div className='text-gray-600 space-y-2'>
				<p className='flex items-center gap-2'>
					<FaBriefcase /> <span className='font-semibold'>Category:</span> {task.category}
				</p>
				<p className='flex items-center gap-2'>
					<FaClock /> <span className='font-semibold'>Deadline:</span> {new Date(task.deadline).toLocaleDateString()}
				</p>
				<p className='flex items-center gap-2'>
					<FaDollarSign /> <span className='font-semibold'>Budget:</span> ${task.budget}
				</p>
				<p className='flex items-center gap-2'>
					<FaUser /> <span className='font-semibold'>Posted by:</span> {task.userName}
				</p>
				<p className='flex items-center gap-2'>
					<FaEnvelope /> <span className='font-semibold'>Email:</span> {task.userEmail}
				</p>
			</div>

			<hr className='my-6' />

			<div>
				<h3 className='text-xl font-semibold mb-2'>Task Description</h3>
				<p className='text-gray-700 leading-relaxed'>{task.description}</p>
			</div>

			<div className='mt-6'>
				<button
					className='btn btn-primary'
					onClick={() => toast.success(`Applied to ${task.title} successfully`)}
				>
					Apply for Task
				</button>
			</div>
		</div>
	);
};

export default TaskDetails;
