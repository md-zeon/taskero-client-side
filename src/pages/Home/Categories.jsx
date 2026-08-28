import {
	Code2,
	Palette,
	PenLine,
	Megaphone,
	Keyboard,
	Ellipsis,
} from "lucide-react";
import { Link } from "react-router";
import SectionHeader from "../../components/SectionHeader";
import Reveal from "../../components/Reveal";

const categories = [
	{ name: "Web Development", icon: <Code2 className="size-6" /> },
	{ name: "Design", icon: <Palette className="size-6" /> },
	{ name: "Writing", icon: <PenLine className="size-6" /> },
	{ name: "Marketing", icon: <Megaphone className="size-6" /> },
	{ name: "Data Entry", icon: <Keyboard className="size-6" /> },
	{ name: "Other", icon: <Ellipsis className="size-6" /> },
];

const Categories = () => {
	return (
		<section className='py-12'>
			<SectionHeader
				eyebrow='Explore'
				title='Browse by Category'
				description='Find tasks in the areas that matter most to you with a single click.'
			/>

			<div className='mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6'>
				{categories.map((cat, idx) => (
					<Reveal key={cat.name} delay={idx * 0.05}>
						<Link
							to={`/browse-tasks?category=${cat.name}`}
							className='group flex flex-col items-center gap-3 rounded-2xl border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft'
						>
							<div className='grid size-14 place-items-center rounded-2xl bg-primary/10 text-2xl text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground'>
								{cat.icon}
							</div>
							<span className='text-center text-sm font-semibold leading-tight text-muted-foreground group-hover:text-foreground'>
								{cat.name}
							</span>
						</Link>
					</Reveal>
				))}
			</div>
		</section>
	);
};

export default Categories;
