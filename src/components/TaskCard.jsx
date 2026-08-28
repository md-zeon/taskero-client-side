import { Link } from "react-router";
import {
	Briefcase,
	Clock,
	DollarSign,
	User,
	Gavel,
	ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const MotionDiv = motion.div;

const TaskCard = ({ task, index = 0 }) => {
	return (
		<MotionDiv
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-40px" }}
			transition={{ duration: 0.45, delay: (index % 4) * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
			className='h-full'
		>
			<Card className='flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-soft'>
				<CardContent className='flex flex-1 flex-col p-6'>
					<div className='mb-3 flex items-start justify-between gap-2'>
						<Badge variant='secondary' className="font-medium">
							<Briefcase className='size-3' />
							{task.category}
						</Badge>
						<span className='flex items-center gap-1 whitespace-nowrap text-xs text-muted-foreground'>
							<Gavel className='size-3.5' /> {task.bidsCount || 0} bids
						</span>
					</div>

					<h3 className='line-clamp-2 text-lg font-semibold tracking-tight'>
						{task.title}
					</h3>

					<p className='mt-1.5 line-clamp-2 text-sm text-muted-foreground'>
						{task.description}
					</p>

					<div className='mt-4 space-y-1.5 text-sm text-muted-foreground'>
						<p className='flex items-center gap-2'>
							<User className='size-4 shrink-0 text-primary/70' />
							{task.userName}
						</p>
						<p className='flex items-center gap-2'>
							<Clock className='size-4 shrink-0 text-primary/70' />
							Deadline: {new Date(task.deadline).toLocaleDateString()}
						</p>
					</div>

					<div className='mt-5 flex items-center justify-between border-t pt-4'>
						<span className='flex items-center gap-1 text-lg font-bold text-primary'>
							<DollarSign className='size-5' /> {task.budget}
						</span>
						<Link
							to={`/task/${task._id}`}
							className='inline-flex items-center gap-1 rounded-md bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground'
						>
							See Details <ArrowRight className='size-3.5' />
						</Link>
					</div>
				</CardContent>
			</Card>
		</MotionDiv>
	);
};

export default TaskCard;
