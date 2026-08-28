import { Users, Lightbulb, Handshake, Globe2 } from "lucide-react";
import { Link } from "react-router";
import SiteTitle from "../components/SiteTitle";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
	{
		icon: <Users className='size-7' />,
		title: "Community Driven",
		description:
			"A growing community of freelancers and task posters working together with trust.",
	},
	{
		icon: <Lightbulb className='size-7' />,
		title: "Smart Matching",
		description:
			"Post your task and let skilled freelancers bid based on expertise and rating.",
	},
	{
		icon: <Handshake className='size-7' />,
		title: "Trust & Transparency",
		description:
			"Real-time bidding, clear budgets, and honest reviews to ensure quality.",
	},
	{
		icon: <Globe2 className='size-7' />,
		title: "Work from Anywhere",
		description:
			"Remote-first platform enabling global talent to collaborate and earn.",
	},
];

const About = () => {
	return (
		<div className='mx-auto max-w-360 px-4 py-12'>
			<SiteTitle>About Us</SiteTitle>

			<div className='mb-16 text-center'>
				<span className='mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary'>
					About Taskero
				</span>
				<h1 className='mb-5 text-4xl font-extrabold tracking-tight md:text-5xl'>
					What is Taskero?
				</h1>
				<p className='mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground'>
					<b className='text-foreground'>Taskero</b> is a freelance task marketplace
					that connects clients with talented freelancers for quick, efficient, and
					professional services. Whether you're a client needing work done fast, or a
					freelancer looking to grow your reputation and income — Taskero provides the
					tools, flexibility, and visibility to make it happen.
				</p>
			</div>

			<div className='mb-16'>
				<SectionHeader
					eyebrow='Why us'
					title='Why Choose Taskero?'
					description='Everything you need to get work done — or grow your freelance career.'
				/>
				<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
					{features.map((feat, idx) => (
						<Reveal key={idx} delay={idx * 0.06}>
							<Card className='h-full text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-soft'>
								<CardContent className='p-7'>
									<div className='mx-auto mb-5 grid size-16 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110'>
										{feat.icon}
									</div>
									<h4 className='mb-2 text-lg font-bold'>{feat.title}</h4>
									<p className='text-sm text-muted-foreground'>
										{feat.description}
									</p>
								</CardContent>
							</Card>
						</Reveal>
					))}
				</div>
			</div>

			<Reveal>
				<div className='mx-auto max-w-3xl rounded-3xl border bg-muted p-10 text-center'>
					<h3 className='mb-4 text-3xl font-bold tracking-tight'>Our Mission</h3>
					<p className='mb-6 leading-relaxed text-muted-foreground'>
						To empower individuals and small teams by providing access to meaningful
						freelance work, and helping businesses get tasks done quickly and
						efficiently — all through a trusted, easy-to-use platform.
					</p>
					<Button asChild size='lg'>
						<Link to='/signup'>Get Started Today</Link>
					</Button>
				</div>
			</Reveal>
		</div>
	);
};

export default About;
