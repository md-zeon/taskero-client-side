import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import {
	Search,
	Briefcase,
	UserRound,
	CheckCircle2,
	ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MotionDiv = motion.div;

const stats = [
	{ icon: <Briefcase className='size-5' />, value: "1,000+", label: "Tasks Posted" },
	{ icon: <UserRound className='size-5' />, value: "500+", label: "Freelancers" },
	{ icon: <CheckCircle2 className='size-5' />, value: "98%", label: "Satisfaction" },
];

const steps = [
	"Post your task and set a budget",
	"Receive bids from top freelancers",
	"Hire, complete, and get it done",
];

const Banner = () => {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	const handleSearch = (e) => {
		e.preventDefault();
		if (!query.trim()) {
			navigate("/browse-tasks");
			return;
		}
		navigate(`/browse-tasks?category=${encodeURIComponent(query.trim())}`);
	};

	return (
		<section className='mt-4 overflow-hidden rounded-3xl border bg-muted/60'>
			<div className='relative grid items-center gap-10 p-8 md:p-12 lg:grid-cols-2'>
				{/* subtle decorative accents on a muted surface — no loud gradient behind text */}
				<div className='pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl' />
				<div className='pointer-events-none absolute -bottom-24 -left-16 size-80 rounded-full bg-warning/10 blur-3xl' />

				<MotionDiv
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
					className='relative'
				>
					<span className='mb-5 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm font-medium text-muted-foreground'>
						<span className='size-2 animate-pulse rounded-full bg-primary' />
						Trusted freelance marketplace
					</span>

					<h1 className='text-4xl font-extrabold leading-tight tracking-tight md:text-5xl'>
						Your Task.{" "}
						<span className='text-primary'>
							<Typewriter
								words={[
									"Their Skill.",
									"Done Right.",
									"Delivered Fast.",
									"Built to Last.",
								]}
								loop
								cursor
								cursorStyle='|'
								typeSpeed={70}
								deleteSpeed={40}
								delaySpeed={1600}
							/>
						</span>
					</h1>

					<p className='mb-8 mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground'>
						Post freelance tasks easily and let top freelancers bid on them — or
						take on tasks and grow your career from anywhere in the world.
					</p>

					<form
						onSubmit={handleSearch}
						className='flex flex-col gap-2 rounded-2xl border bg-background p-2 sm:flex-row'
					>
						<div className='flex flex-1 items-center gap-3 px-3'>
							<Search className='size-4 shrink-0 text-muted-foreground' />
							<Input
								type='text'
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder='Search tasks, e.g. Web Development'
								className='border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0'
							/>
						</div>
						<Button type='submit'>Search</Button>
					</form>

					<div className='mt-4 flex flex-wrap gap-3'>
						<Button asChild size='lg'>
							<Link to='/dashboard/add-task'>
								Post a Task <ArrowRight className='size-4' />
							</Link>
						</Button>
						<Button asChild size='lg' variant='outline'>
							<Link to='/browse-tasks'>Browse Tasks</Link>
						</Button>
					</div>
				</MotionDiv>

				{/* Stats card on muted surface */}
				<MotionDiv
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.15 }}
					className='relative hidden lg:block'
				>
					<div className='space-y-6 rounded-3xl border bg-background p-8 shadow-soft'>
						<div className='grid grid-cols-3 gap-4 text-center'>
							{stats.map((stat, idx) => (
								<div key={idx} className='flex flex-col items-center gap-2'>
									<span className='grid size-11 place-items-center rounded-xl bg-primary/10 text-primary'>
										{stat.icon}
									</span>
									<span className='text-2xl font-bold'>{stat.value}</span>
									<span className='text-xs text-muted-foreground'>{stat.label}</span>
								</div>
							))}
						</div>

						<div className='border-t pt-6'>
							<p className='mb-4 text-center text-sm text-muted-foreground'>
								How it works in 3 easy steps
							</p>
							<ol className='space-y-3'>
								{steps.map((step, idx) => (
									<li key={idx} className='flex items-center gap-3 text-sm'>
										<span className='grid size-7 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary'>
											{idx + 1}
										</span>
										{step}
									</li>
								))}
							</ol>
						</div>
					</div>
				</MotionDiv>
			</div>
		</section>
	);
};

export default Banner;
