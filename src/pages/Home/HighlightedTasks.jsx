import { useEffect, useState } from "react";
import { Flame } from "lucide-react";
import TaskCard from "../../components/TaskCard";
import SectionHeader from "../../components/SectionHeader";
import Loader from "../../components/Loader";
import { Badge } from "@/components/ui/badge";
import { tasksUrl } from "../../config/api";

const HighlightedTasks = () => {
	const [highlightedTasks, setHighlightedTasks] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(tasksUrl("?limit=4&sort=bidsCount"))
			.then((res) => res.json())
			.then((data) => setHighlightedTasks(data))
			.finally(() => setLoading(false));
	}, []);

	return (
		<section className='rounded-2xl border bg-muted/50 px-4 py-12 md:px-8'>
			<SectionHeader
				eyebrow='Trending'
				title={
					<span className='inline-flex items-center justify-center gap-2'>
						<Flame className='size-6 text-warning' /> Highlighted Tasks
					</span>
				}
				description='Tasks attracting the most bids — popular opportunities with strong engagement.'
			/>

			{loading ? (
				<Loader />
			) : (
				<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>
					{highlightedTasks.map((task, idx) => (
						<div key={task._id} className='relative'>
							<div className='absolute -right-1 -top-2 z-10'>
								<Badge variant='warning'>
									<Flame className='size-3' /> Popular
								</Badge>
							</div>
							<TaskCard task={task} index={idx} />
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default HighlightedTasks;
