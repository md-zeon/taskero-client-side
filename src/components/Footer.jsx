import { CgGoogleTasks } from "react-icons/cg";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
	return (
		<footer className='max-w-7xl mx-auto text-base-content px-4 py-12'>
			<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
				{/* Website Info */}
				<div>
					<h3 className='text-3xl font-bold flex items-center gap-2'>
						<CgGoogleTasks className='animate-pulse' /> Taskero
					</h3>
					<p className='text-sm mt-2 max-w-2xs'>
						Taskero is a freelance task marketplace where clients and freelancers connect for small, meaningful work
						opportunities.
					</p>
				</div>

				{/* Contact Info */}
				<div>
					<h3 className='footer-title mb-2'>Contact Us</h3>
					<p className='flex items-center gap-2'>
						<FaEnvelope /> support@taskero.com
					</p>
					<p className='flex items-center gap-2 mt-1'>
						<FaPhoneAlt /> +880 1523-456789
					</p>
				</div>

				{/* Useful Links */}
				<div>
					<h3 className='footer-title mb-2'>Useful Links</h3>
					<ul className='space-y-1'>
						<li>
							<NavLink
								to='/'
								className='link link-hover'
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/add-task'
								className='link link-hover'
							>
								Add Task
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/browse-tasks'
								className='link link-hover'
							>
								Browse Tasks
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/my-posted-tasks'
								className='link link-hover'
							>
								My Posted Task
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/terms'
								className='link link-hover'
							>
								Terms & Conditions
							</NavLink>
						</li>
					</ul>
				</div>

				{/* Social Media */}
				<div>
					<h3 className='footer-title mb-2'>Follow Us</h3>
					<div className='flex gap-4'>
						<a
							href='https://facebook.com'
							target='_blank'
							rel='noreferrer'
							className='text-xl hover:text-blue-600'
						>
							<FaFacebookF />
						</a>
						<a
							href='https://twitter.com'
							target='_blank'
							rel='noreferrer'
							className='text-xl hover:text-sky-400'
						>
							<FaTwitter />
						</a>
						<a
							href='https://linkedin.com'
							target='_blank'
							rel='noreferrer'
							className='text-xl hover:text-blue-700'
						>
							<FaLinkedinIn />
						</a>
					</div>
				</div>
			</div>

			{/* Bottom line */}
			<div>
				<div className='divider'></div>
				<p className='text-sm text-center'>
					&copy; {new Date().getFullYear()} <span className='font-semibold'>Taskero</span>. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
