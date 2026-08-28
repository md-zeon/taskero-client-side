import { LoaderCircle } from "lucide-react";

const Loader = ({ label = "Loading…" }) => {
	return (
		<div className='flex w-full items-center justify-center gap-3 py-24 text-muted-foreground'>
			<LoaderCircle className='size-5 animate-spin text-primary' />
			<span className='text-sm font-medium'>{label}</span>
		</div>
	);
};

export default Loader;
