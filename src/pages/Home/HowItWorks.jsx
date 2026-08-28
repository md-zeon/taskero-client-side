import { Lightbulb, Handshake, CheckCircle2 } from "lucide-react";
import Reveal from "../../components/Reveal";

const steps = [
	{
		title: "Post a Task",
		icon: <Lightbulb className='size-7' />,
		description:
			"Describe your task, set a budget, and post it to attract freelancers.",
		delay: 0,
	},
	{
		title: "Receive Bids",
		icon: <Handshake className='size-7' />,
		description:
			"Freelancers bid on your task with their proposals and rates.",
		delay: 0.1,
	},
	{
		title: "Hire & Complete",
		icon: <CheckCircle2 className='size-7' />,
		description:
			"Choose the best freelancer and get your task completed on time.",
		delay: 0.2,
	},
];

const HowItWorks = () => {
	return (
		<section className='py-14'>
			<div className='mx-auto mb-12 max-w-2xl text-center'>
				<Reveal>
					<span className='mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary'>
						How it works
					</span>
					<h2 className='mb-3 text-3xl font-bold tracking-tight md:text-4xl'>
						Get it done in{" "}
						<span className='text-primary'>3 simple steps</span>
					</h2>
					<p className='mx-auto max-w-xl text-muted-foreground'>
						A simplified guide that helps you use Taskero — from posting a task
						to hiring a freelancer.
					</p>
				</Reveal>
			</div>

			<div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
				{steps.map((step, idx) => (
					<Reveal
						key={idx}
						delay={step.delay}
						className='relative text-center'
					>
						{idx < steps.length - 1 && (
							<div className='absolute left-[60%] top-10 hidden h-0.5 w-[80%] bg-primary/20 md:block' />
						)}
						<div className='relative mx-auto mb-5 grid size-16 place-items-center rounded-2xl bg-primary/10 text-primary'>
							{step.icon}
							<span className='absolute -right-2 -top-2 grid size-7 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-md'>
								{idx + 1}
							</span>
						</div>
						<h3 className='mb-2 text-xl font-bold'>{step.title}</h3>
						<p className="mx-auto max-w-xs text-muted-foreground">
							{step.description}
						</p>
					</Reveal>
				))}
			</div>
		</section>
	);
};

export default HowItWorks;
