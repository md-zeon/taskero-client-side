import { use } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";

import { FaTasks, FaDollarSign, FaCalendarAlt, FaUser, FaEnvelope } from "react-icons/fa";
import { MdTitle, MdCategory, MdDescription } from "react-icons/md";
import SiteTitle from "../../components/SiteTitle";

const AddTask = () => {
	const { user } = use(AuthContext);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const newTask = {
			title: form.title.value,
			category: form.category.value,
			description: form.description.value,
			deadline: form.deadline.value,
			budget: parseFloat(form.budget.value),
			userEmail: user?.email,
			userName: user?.displayName,
		};
		fetch("http://localhost:5000/tasks", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(newTask),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					toast.success("Task added successfully!");
					navigate("/my-posted-tasks");
					form.reset();
				}
			})
			.catch((err) => {
				console.error(err);
				toast.error("Failed to add task.");
			});
	};

	return (
		<div
		className='max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-br from-base-200 to-base-100 rounded-2xl shadow-2xl border border-base-300'
		data-aos='fade-up'
		>
			<SiteTitle>Add Task</SiteTitle>
			<h2
				className='text-3xl font-bold mb-8 text-center text-primary flex items-center justify-center gap-2'
				data-aos='fade-down'
				data-aos-delay='100'
			>
				<FaTasks /> Add a New Task
			</h2>
			<form
				onSubmit={handleSubmit}
				className='grid grid-cols-1 gap-5'
			>
				<div className='flex items-center gap-2'>
					<MdTitle className='text-lg' />
					<input
						type='text'
						name='title'
						placeholder='Task Title'
						className='input input-bordered w-full'
						required
					/>
				</div>

				<div className='flex items-center gap-2'>
					<MdCategory className='text-lg' />
					<select
						name='category'
						className='select select-bordered w-full'
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

				<div className='flex items-start gap-2'>
					<MdDescription className='text-xl mt-2' />
					<textarea
						name='description'
						placeholder='Task Description'
						className='textarea textarea-bordered w-full'
						required
					></textarea>
				</div>

				<div className='flex items-center gap-2'>
					<FaCalendarAlt className='text-lg' />
					<input
						type='date'
						name='deadline'
						className='input input-bordered w-full'
						required
					/>
				</div>

				<div className='flex items-center gap-2'>
					<FaDollarSign className='text-lg' />
					<input
						type='number'
						name='budget'
						placeholder='Budget (USD)'
						className='input input-bordered w-full'
						required
					/>
				</div>

				<div className='grid md:grid-cols-2 gap-4'>
					<div className='flex items-center gap-2'>
						<FaUser />
						<input
							type='text'
							value={user.displayName}
							readOnly
							className='input input-bordered w-full bg-base-300 cursor-not-allowed'
						/>
					</div>

					<div className='flex items-center gap-2'>
						<FaEnvelope />
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
					className='btn btn-primary w-full mt-4 hover:scale-95 transition-transform duration-300'
				>
					Submit Task
				</button>
			</form>
		</div>
	);
};

export default AddTask;
