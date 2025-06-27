import { FaUser, FaEnvelope, FaDollarSign, FaBriefcase, FaClock } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import SiteTitle from "../../components/SiteTitle";
import { useState } from "react";
import GoBack from "../../components/GoBack";

const TaskDetails = () => {
	const task = useLoaderData();
	const { id } = useParams();
	const [bids, setBids] = useState(task.bidsCount || 0);

	const handleBid = () => {
		fetch(`https://taskero-server.vercel.app/tasks/${id}/bids`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					setBids(bids + 1);
					toast.success("Bid placed successfully!");
				} else {
					toast.error("Failed to place bid.");
				}
			})
			.catch((err) => {
				console.error(err);
				toast.error("Failed to place bid.");
			});
	};

	return (
		<div
			className='max-w-3xl mx-auto bg-base-200 rounded-lg shadow-lg p-8 mt-10'
			data-aos='fade-up'
		>
			<SiteTitle>{task.title}</SiteTitle>
			<GoBack />
			<p className="badge badge-soft badge-primary badge-lg my-4">You bid for {bids} opportunities.</p>
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
					onClick={handleBid}
				>
					Place Bid
				</button>
			</div>
		</div>
	);
};

export default TaskDetails;
