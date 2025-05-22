import { use } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";

const AddTask = () => {
	const { user } = use(AuthContext);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const task = {
			title: e.target.title.value,
			category: e.target.category.value,
			description: e.target.description.value,
			deadline: e.target.deadline.value,
			budget: parseFloat(e.target.budget.value),
			userEmail: user?.email,
			userName: user?.displayName,
		};
		console.log(task);
		fetch("http://localhost:5000/tasks", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(task),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					toast.success("Task added successfully!");
					navigate("/tasks");
					e.target.reset();
				}
			})
			.catch((err) => console.error(err));
	};

	return (
		<div className='max-w-3xl mx-auto mt-10 p-6 bg-base-200 rounded-lg shadow-lg'>
			<h2 className='text-2xl font-bold mb-6 text-center'>Add a New Task</h2>
			<form
				onSubmit={handleSubmit}
				className='grid grid-cols-1 gap-4'
			>
				<input
					type='text'
					name='title'
					placeholder='Task Title'
					className='input input-bordered w-full'
					required
				/>

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

				<textarea
					name='description'
					placeholder='Task Description'
					className='textarea textarea-bordered w-full'
					required
				></textarea>

				<input
					type='date'
					name='deadline'
					className='input input-bordered w-full'
					required
				/>

				<input
					type='number'
					name='budget'
					placeholder='Budget (USD)'
					className='input input-bordered w-full'
					required
				/>

				<input
					type='text'
					value={user.displayName}
					readOnly
					className='input input-bordered w-full bg-gray-100 cursor-not-allowed'
				/>

				<input
					type='email'
					value={user.email}
					readOnly
					className='input input-bordered w-full bg-gray-100 cursor-not-allowed'
				/>

				<button
					type='submit'
					className='btn btn-primary w-full mt-4'
				>
					Add Task
				</button>
			</form>
		</div>
	);
};

export default AddTask;
