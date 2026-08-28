import { motion } from "motion/react";

const Reveal = ({
	children,
	delay = 0,
	y = 20,
	duration = 0.5,
	className,
	as = "div",
}) => {
	const Component = motion[as] || motion.div;
	return (
		<Component
			className={className}
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
		>
			{children}
		</Component>
	);
};

export default Reveal;
