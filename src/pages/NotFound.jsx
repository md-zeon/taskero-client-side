import { Link } from "react-router";
import SEO from "../components/SEO";
import { Home, Search, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
	return (
		<div className='flex min-h-[calc(100vh-12rem)] items-center justify-center bg-background px-4'>
			<SEO title='404 - Page Not Found'
				description='The page you are looking for does not exist. Head back to Taskero to browse freelance tasks or post a new one.'
			/>
			<div className='mx-auto max-w-md text-center'>
				<div className='mb-6 flex justify-center'>
					<div className='grid size-24 place-items-center rounded-3xl bg-primary/10 text-primary'>
						<TriangleAlert className='size-12' />
					</div>
				</div>
				<p className='mb-2 text-7xl font-extrabold text-muted-foreground/20'>404</p>
				<h2 className='mb-3 text-3xl font-bold tracking-tight'>Page Not Found</h2>
				<p className='mb-8 text-muted-foreground'>
					Oops! The page you're looking for doesn't exist or has been moved.
				</p>
				<div className='flex flex-wrap justify-center gap-4'>
					<Button asChild size='lg'>
						<Link to='/'>
							<Home className='size-4' /> Go to Home
						</Link>
					</Button>
					<Button asChild size='lg' variant='outline'>
						<Link to='/browse-tasks'>
							<Search className='size-4' /> Browse Tasks
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
