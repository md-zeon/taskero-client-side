import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const Item = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='border border-primary rounded shadow-sm hover:shadow-primary'>
			<button
				type='button'
				aria-label='Toggle FAQ item'
				title='Toggle FAQ item'
				className='flex items-center justify-between w-full p-4 focus:outline-none'
				onClick={() => setIsOpen(!isOpen)}
			>
				<p className='text-lg font-medium'>{title}</p>
				<div className='flex items-center justify-center w-8 h-8 border border-primary rounded-full'>
					<svg
						viewBox='0 0 24 24'
						className={`w-3 text-primary transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
					>
						<polyline
							fill='none'
							stroke='currentColor'
							strokeWidth='4'
							strokeLinecap='round'
							strokeMiterlimit='10'
							points='2,7 12,17 22,7'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
			</button>
			{isOpen && (
				<div className='p-4 pt-0'>
					<p className='text-gray-600'>{children}</p>
				</div>
			)}
		</div>
	);
};

const FAQ = () => {
	return (
		<div
			data-aos='fade-up'
			data-aos-delay='200'
			className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'
		>
			<div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
				<div className='flex flex-col mb-16 sm:text-center'>
					<div className='flex items-center justify-center w-12 h-12 rounded-full border border-primary text-primary mb-6 mx-auto'>
						<FaQuestionCircle size={24} />
					</div>

					<div className='max-w-xl md:mx-auto sm:text-center lg:max-w-2xl'>
						<h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto text-center'>
							<span className='relative inline-block'>
								<svg
									viewBox='0 0 52 24'
									fill='currentColor'
									className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
								>
									<defs>
										<pattern
											id='pattern-faq'
											x='0'
											y='0'
											width='.135'
											height='.30'
										>
											<circle
												cx='1'
												cy='1'
												r='.7'
											/>
										</pattern>
									</defs>
									<rect
										fill='url(#pattern-faq)'
										width='52'
										height='24'
									/>
								</svg>
								<span className='relative'>Frequently</span>
							</span>{" "}
							Asked Questions
						</h2>
						<p className='text-gray-600 md:text-lg'>
							Find answers to common questions about using Taskero as a client or a freelancer.
						</p>
					</div>
				</div>
				<div className='space-y-4'>
					<Item title='How do I post a task on Taskero?'>
						To post a task, sign up or log in to your Taskero account. Navigate to the "Add Task" page from the navbar,
						fill in details like task title, category, description, deadline, and budget, then click "Submit Task."
						You'll receive a confirmation, and freelancers can start bidding on your task.
					</Item>
					<Item title='How can I bid on a task?'>
						Browse available tasks on the "Browse Tasks" page. Click "See Details" on a task to view its full details.
						If you're logged in, you can place a bid by clicking the "Place Bid" button on the task details page. The
						task owner will be notified of your bid.
					</Item>
					<Item title='Is Taskero free to use?'>
						Yes, Taskero offers free access to posts and browse tasks. Posting tasks and bidding are also free. A small
						service fee may apply on completed transactions.
					</Item>
					<Item title='How do I sign up or log in to Taskero?'>
						Click "Sign Up" or "Login" in the navbar. You can register with your email and password or use Google
						authentication. For signup, provide your name, email, photo URL, and a password (at least 6 characters with
						uppercase and lowercase letters). After logging in, you can access private features like posting tasks or
						viewing your posted tasks.
					</Item>
					<Item title='Can I edit or delete a task I posted?'>
						Yes, go to the "My Posted Tasks" page to see all tasks you've posted. Click the "Edit" button to update task
						details or the "Delete" button to remove a task. You'll be asked to confirm deletion to prevent accidental
						removal.
					</Item>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
