import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

const SectionHeader = ({ eyebrow, title, description, center = true }) => {
	return (
		<Reveal className={cn("mb-10", center && "text-center")}>
			{eyebrow && (
				<span className='mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary'>
					{eyebrow}
				</span>
			)}
			<h2 className='text-3xl font-bold tracking-tight md:text-4xl'>{title}</h2>
			{description && (
				<p
					className={cn(
						"mt-3 text-muted-foreground",
						center && "mx-auto",
						center && "max-w-xl",
					)}
				>
					{description}
				</p>
			)}
		</Reveal>
	);
};

export default SectionHeader;
