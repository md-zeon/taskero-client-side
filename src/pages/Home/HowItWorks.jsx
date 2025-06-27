import { FaLightbulb, FaHandHolding, FaCheckCircle } from "react-icons/fa";

const steps = [
	{
		title: "1. Post a Task",
		icon: <FaLightbulb className='text-primary text-4xl' />,
		description: "Describe your task, set a budget, and post it to attract freelancers.",
		delay: 0,
	},
	{
		title: "2. Receive Bids",
		icon: <FaHandHolding className='text-primary text-4xl' />,
		description: "Freelancers bid on your task with their proposals and rates.",
		delay: 100,
	},
	{
		title: "3. Hire & Complete",
		icon: <FaCheckCircle className='text-primary text-4xl' />,
		description: "Choose the best freelancer and get your task completed on time.",
		delay: 200,
	},
];

const HowItWorks = () => {
	return (
		<section className='py-10 bg-muted/10 rounded-2xl'>
			<h2 className='text-3xl font-bold text-center mb-4 text-primary'>How Taskero Works</h2>
			<p className='text-center text-gray-600 max-w-2xl mb-12 mx-auto'>
				A simplified 3-step guide that helps users understand how to use Taskero — from posting a task to hiring a
				freelancer.
			</p>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				{steps.map((step, idx) => (
					<div
						key={idx}
						className='p-6 rounded-2xl text-center transition-transform duration-500 hover:scale-105 hover:shadow-md shadow-primary border border-primary'
						data-aos='zoom-in'
						data-aos-delay={step.delay}
					>
						<div className='mb-4 flex justify-center'>{step.icon}</div>
						<h3 className='text-xl font-semibold mb-2 text-primary'>{step.title}</h3>
						<p className='text-gray-600'>{step.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default HowItWorks;
