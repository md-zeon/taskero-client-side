import { Link } from "react-router";

const NotFound = () => {
	return (
		<div className='max-w-7xl mx-auto'>
			<div
				className='min-h-screen flex items-center justify-center'
				data-aos='fade-up'
			>
				<div className='text-center'>
					<h2 className='text-4xl font-bold mb-4'>404 - Page Not Found</h2>
					<p className='mb-4'>Sorry, the page you are looking for does not exist.</p>
					<Link
						to='/'
						className='btn btn-primary'
					>
						Go to Home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
