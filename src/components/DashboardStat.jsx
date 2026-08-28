import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

const MotionDiv = motion.div;

const DashboardStat = ({ icon, label, value, delay = 0 }) => {
	return (
		<MotionDiv
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-40px" }}
			transition={{ duration: 0.4, delay }}
		>
			<Card className='h-full transition-shadow hover:shadow-soft'>
				<CardContent className='flex items-center gap-4 p-5'>
					<div className='grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-xl text-primary'>
						{icon}
					</div>
					<div>
						<p className='text-2xl font-bold leading-tight'>{value}</p>
						<p className='text-sm text-muted-foreground'>{label}</p>
					</div>
				</CardContent>
			</Card>
		</MotionDiv>
	);
};

export default DashboardStat;
