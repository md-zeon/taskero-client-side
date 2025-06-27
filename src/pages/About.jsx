import { FaUsers, FaLightbulb, FaHandshake, FaGlobe } from "react-icons/fa";
import SiteTitle from "../components/SiteTitle";

const About = () => {
	return (
		<div className='max-w-7xl mx-auto px-4 py-10'>
			<SiteTitle>About Us</SiteTitle>

			<section className='mb-16' data-aos='fade-up'>
				<h2 className='text-4xl font-bold text-center text-primary mb-4'>What is Taskero?</h2>
				<p className='text-center max-w-3xl mx-auto text-gray-600'>
					<b>Taskero</b> is a freelance task marketplace that connects clients with talented freelancers for quick, efficient, and professional services. Whether you're a client needing work done fast, or a freelancer looking to grow your reputation and income — Taskero provides the tools, flexibility, and visibility to make it happen.
				</p>
			</section>

			<section className='mb-16' data-aos='fade-up'>
				<h3 className='text-3xl font-bold text-center text-primary mb-10'>Why Choose Taskero?</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					<div className='p-6 bg-base-200 rounded-xl shadow-md text-center hover:shadow-lg transition'>
						<FaUsers className='text-4xl text-primary mb-4 mx-auto' />
						<h4 className='text-xl font-semibold mb-2'>Community Driven</h4>
						<p className='text-gray-600 text-sm'>
							A growing community of freelancers and task posters working together with trust.
						</p>
					</div>

					<div className='p-6 bg-base-200 rounded-xl shadow-md text-center hover:shadow-lg transition'>
						<FaLightbulb className='text-4xl text-primary mb-4 mx-auto' />
						<h4 className='text-xl font-semibold mb-2'>Smart Matching</h4>
						<p className='text-gray-600 text-sm'>
							Post your task and let skilled freelancers bid based on expertise and rating.
						</p>
					</div>

					<div className='p-6 bg-base-200 rounded-xl shadow-md text-center hover:shadow-lg transition'>
						<FaHandshake className='text-4xl text-primary mb-4 mx-auto' />
						<h4 className='text-xl font-semibold mb-2'>Trust & Transparency</h4>
						<p className='text-gray-600 text-sm'>
							Real-time bidding, clear budgets, and honest reviews to ensure quality.
						</p>
					</div>

					<div className='p-6 bg-base-200 rounded-xl shadow-md text-center hover:shadow-lg transition'>
						<FaGlobe className='text-4xl text-primary mb-4 mx-auto' />
						<h4 className='text-xl font-semibold mb-2'>Work from Anywhere</h4>
						<p className='text-gray-600 text-sm'>
							Remote-first platform enabling global talent to collaborate and earn.
						</p>
					</div>
				</div>
			</section>

			<section className='text-center max-w-3xl mx-auto' data-aos='fade-up'>
				<h3 className='text-3xl font-bold text-primary mb-4'>Our Mission</h3>
				<p className='text-gray-600'>
					To empower individuals and small teams by providing access to meaningful freelance work, and helping businesses get tasks done quickly and efficiently — all through a trusted, easy-to-use platform.
				</p>
			</section>
		</div>
	);
};

export default About;
