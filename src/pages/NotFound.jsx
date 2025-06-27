import { Link } from "react-router";
import SiteTitle from "../components/SiteTitle";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
	return (
		<div className='min-h-screen flex items-center justify-center bg-base-100'>
			<SiteTitle>404 - Page Not Found</SiteTitle>
			<div
				className='text-center p-6 max-w-md mx-auto'
				data-aos='fade-up'
			>
				<div className='mb-4 flex justify-center'>
					<FaExclamationTriangle className='text-6xl text-primary' />
				</div>
				<h2 className='text-4xl font-bold mb-4 text-primary'>404 - Page Not Found</h2>
				<p className='mb-6 text-base-content'>Oops! The page you're looking for doesn't exist or has been moved.</p>
				<div className='flex gap-4 justify-center'>
					<Link
						to='/'
						className='btn btn-primary'
					>
						Go to Home
					</Link>
					<Link
						to='/dashboard'
						className='btn btn-primary btn-outline'
					>
						Go to Dashboard
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
