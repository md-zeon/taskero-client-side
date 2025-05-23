import { FaLightbulb, FaHandHolding, FaCheckCircle } from "react-icons/fa";

const steps = [
	{
		title: "1. Post a Task",
		icon: <FaLightbulb className='text-primary text-4xl' />,
		description: "Describe your task, set a budget, and post it to attract freelancers.",
		delay: 300,
	},
	{
		title: "2. Receive Bids",
		icon: <FaHandHolding className='text-primary text-4xl' />,
		description: "Freelancers bid on your task with their proposals and rates.",
		delay: 400,
	},
	{
		title: "3. Hire & Complete",
		icon: <FaCheckCircle className='text-primary text-4xl' />,
		description: "Choose the best freelancer and get your task completed on time.",
		delay: 500,
	},
];

const HowItWorks = () => {
	return (
		<section
			className='py-14 px-4 md:px-10 bg-muted/10 rounded-2xl shadow-inner'
			data-aos='fade-up'
			data-aos-delay='200'
		>
			<h2 className='text-4xl font-bold text-center mb-12 text-primary'>How Taskero Works</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				{steps.map((step, idx) => (
					<div
						key={idx}
						className='bg-white p-6 rounded-2xl shadow-md text-center transition-transform duration-300 hover:scale-105'
						data-aos='zoom-in'
						data-aos-delay={step.delay}
					>
						<div className='mb-4 flex justify-center'>{step.icon}</div>
						<h3 className='text-xl font-semibold mb-2 text-gray-800'>{step.title}</h3>
						<p className='text-gray-600'>{step.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default HowItWorks;
