import { useLoaderData, useNavigate, useParams } from "react-router";
import { FaEdit, FaDollarSign, FaRegCalendarAlt, FaArrowLeft, FaUser, FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";
import GoBack from "../../components/GoBack";
import { use } from "react";
import AuthContext from "../../context/AuthContext";
import SiteTitle from "../../components/SiteTitle";

const EditTask = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const task = useLoaderData();
	const { user } = use(AuthContext);

	if (task.userEmail !== user?.email) {
		return (
			<div className='flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]'>
				<h1 className='text-2xl font-bold mb-4'>You are not authorized to edit this task.</h1>
				<p className='text-lg mb-4'>You can only edit tasks that you have posted.</p>
				<button
					onClick={() => navigate("/my-posted-tasks")}
					className='btn btn-primary'
				>
					Go Back
				</button>
			</div>
		);
	}

	const handleUpdate = (e) => {
		e.preventDefault();
		const form = e.target;

		const updatedTask = {
			title: form.title.value,
			category: form.category.value,
			description: form.description.value,
			deadline: form.deadline.value,
			budget: parseFloat(form.budget.value),
		};

		fetch(`https://taskero-server.vercel.app/tasks/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updatedTask),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					toast.success("Task updated successfully!");
					navigate("/my-posted-tasks");
				} else {
					toast.info("No changes were made.");
				}
			})
			.catch((err) => console.error(err));
	};

	return (
		<div
			className='max-w-3xl mx-auto mt-10 p-8 bg-base-200 rounded-2xl shadow-xl space-y-6'
			data-aos='fade-up'
		>
			<SiteTitle>Update Task</SiteTitle>
			<GoBack />
			<h2 className='text-3xl font-bold text-center flex items-center justify-center gap-2 text-primary'>
				<FaEdit /> Edit Task: <span className='italic text-gray-700'>{task.title}</span>
			</h2>

			<form
				onSubmit={handleUpdate}
				className='grid grid-cols-1 gap-5'
			>
				<div>
					<label className='label font-semibold'>Title</label>
					<input
						type='text'
						name='title'
						defaultValue={task.title}
						placeholder='Enter task title'
						className='input input-bordered w-full'
						required
					/>
				</div>

				<div>
					<label className='label font-semibold'>Category</label>
					<select
						name='category'
						className='select select-bordered w-full'
						defaultValue={task.category}
						required
					>
						<option value=''>Select Category</option>
						<option>Web Development</option>
						<option>Design</option>
						<option>Writing</option>
						<option>Marketing</option>
						<option>Data Entry</option>
						<option>Other</option>
					</select>
				</div>

				<div>
					<label className='label font-semibold'>Description</label>
					<textarea
						name='description'
						defaultValue={task.description}
						placeholder='Enter task description'
						className='textarea textarea-bordered w-full'
						required
					></textarea>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<div>
						<label className='label font-semibold flex items-center gap-2'>
							<FaRegCalendarAlt /> Deadline
						</label>
						<input
							type='date'
							name='deadline'
							defaultValue={task.deadline}
							className='input input-bordered w-full'
							required
						/>
					</div>

					<div>
						<label className='label font-semibold flex items-center gap-2'>
							<FaDollarSign /> Budget (USD)
						</label>
						<input
							type='number'
							name='budget'
							defaultValue={task.budget}
							placeholder='Enter budget'
							className='input input-bordered w-full'
							required
						/>
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<div className='flex items-center gap-2'>
						<label className='label font-semibold flex items-center gap-2'>
							<FaUser />
						</label>
						<input
							type='text'
							value={user.displayName}
							readOnly
							className='input input-bordered w-full bg-base-300 cursor-not-allowed'
						/>
					</div>

					<div className='flex items-center gap-2'>
						<label className='label font-semibold flex items-center gap-2'>
							<FaEnvelope />
						</label>
						<input
							type='email'
							value={user.email}
							readOnly
							className='input input-bordered w-full bg-base-300 cursor-not-allowed'
						/>
					</div>
				</div>

				<button
					type='submit'
					className='btn btn-primary w-full mt-6'
				>
					Update Task
				</button>
			</form>
		</div>
	);
};

export default EditTask;
