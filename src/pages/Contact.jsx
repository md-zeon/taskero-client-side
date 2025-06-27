import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import SiteTitle from "../components/SiteTitle";
import { toast } from "react-toastify";

const Contact = () => {
	return (
		<div className='max-w-7xl mx-auto px-4 py-10'>
			<SiteTitle>Contact Us</SiteTitle>

			<section
				className='mb-12'
				data-aos='fade-down'
			>
				<h2 className='text-4xl font-bold text-center text-primary mb-4'>Get in Touch</h2>
				<p className='text-center text-gray-600 max-w-2xl mx-auto'>
					Have a question, suggestion, or feedback? We’d love to hear from you. Fill out the form or use the contact
					info below.
				</p>
			</section>

			<div
				className='grid md:grid-cols-2 gap-10 items-start'
				data-aos='fade-up'
			>
				{/* Contact Info */}
				<div className='space-y-6'>
					<div className='flex items-start gap-4'>
						<FaEnvelope className='text-2xl text-primary' />
						<div>
							<h4 className='text-lg font-bold'>Email</h4>
							<p className='text-gray-600'>support@taskero.com</p>
						</div>
					</div>

					<div className='flex items-start gap-4'>
						<FaPhone className='text-2xl text-primary' />
						<div>
							<h4 className='text-lg font-bold'>Phone</h4>
							<p className='text-gray-600'>+880 1234-567890</p>
						</div>
					</div>

					<div className='flex items-start gap-4'>
						<FaMapMarkerAlt className='text-2xl text-primary' />
						<div>
							<h4 className='text-lg font-bold'>Location</h4>
							<p className='text-gray-600'>Dhaka, Bangladesh</p>
						</div>
					</div>
				</div>

				{/* Contact Form */}
				<form
					onSubmit={(e) => {
						e.preventDefault();
						toast("Thanks for contacting Taskero!");
					}}
					className='bg-base-200 p-6 rounded-2xl border border-base-300 shadow-md space-y-4'
				>
					<input
						type='text'
						required
						placeholder='Your Name'
						className='input input-bordered w-full'
					/>
					<input
						type='email'
						required
						placeholder='Your Email'
						className='input input-bordered w-full'
					/>
					<input
						type='text'
						placeholder='Subject (Optional)'
						className='input input-bordered w-full'
					/>
					<textarea
						required
						placeholder='Your Message'
						rows={4}
						className='textarea textarea-bordered w-full'
					></textarea>

					<button
						type='submit'
						className='btn btn-primary w-full'
					>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
