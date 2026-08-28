import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import TaskCard from "../../components/TaskCard";
import SectionHeader from "../../components/SectionHeader";
import { Button } from "@/components/ui/button";

const FeaturedTasks = ({ tasks }) => {
	return (
		<section className='py-12'>
			<SectionHeader
				eyebrow='Featured'
				title='Featured Tasks'
				description='A curated selection of tasks handpicked for their clarity, quality, or value.'
			/>

			{/* muted, non-background-tinted container for readability */}
			<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>
				{tasks.length > 0 ? (
					tasks.map((task, idx) => (
						<TaskCard key={task._id} task={task} index={idx} />
					))
				) : (
					<p className='col-span-full py-8 text-center text-muted-foreground'>
						No tasks available yet.
					</p>
				)}
			</div>

			<div className='mt-10 text-center'>
				<Button asChild variant='outline' size='lg'>
					<Link to='/browse-tasks'>
						Show More <ArrowRight className='size-4' />
					</Link>
				</Button>
			</div>
		</section>
	);
};

export default FeaturedTasks;
