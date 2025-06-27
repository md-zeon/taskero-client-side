import { toast } from "react-toastify";

const Newsletter = () => {
	return (
		<section
			className='py-12 px-4 md:px-0'
			data-aos='fade-up'
		>
			<div className='max-w-4xl mx-auto p-8 rounded-2xl shadow border border-primary'>
				<h2 className='text-3xl font-bold text-center text-primary mb-4'>📬 Stay in the Loop!</h2>
				<p className='text-center text-gray-600 mb-8'>
					Subscribe to our newsletter and be the first to know about new freelance tasks, platform updates, and
					exclusive offers.
				</p>

				<form
					className='flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto'
					onSubmit={(e) => {
						e.preventDefault();
                        e.target.reset();
						toast("Thank you for subscribing!");
					}}
				>
					<input
						type='email'
						required
						placeholder='Enter your email'
						className='input input-bordered w-full sm:flex-1'
					/>
					<button
						type='submit'
						className='btn btn-primary w-full sm:w-auto'
					>
						Subscribe
					</button>
				</form>
			</div>
		</section>
	);
};

export default Newsletter;
