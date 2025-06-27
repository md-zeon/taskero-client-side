import SiteTitle from "../../components/SiteTitle";
import Banner from "./Banner";
import FeaturedTasks from "./FeaturedTasks";
import HowItWorks from "./HowItWorks";
import FAQ from "./FAQ";
import { Link, useLoaderData } from "react-router";
import HighlightedTasks from "./HighlightedTasks";
import Categories from "./Categories";
const Home = () => {
	const featuredTasks = useLoaderData();

	return (
		<div className='max-w-7xl mx-auto space-y-8'>
			<SiteTitle>Home</SiteTitle>
			<Banner />
			<HowItWorks />
			<Categories />
			<FeaturedTasks tasks={featuredTasks} />
			<HighlightedTasks tasks={featuredTasks} />
			<div
				className='bg-primary text-white text-center p-8 rounded-xl shadow-md'
				data-aos='zoom-in'
			>
				<h3 className='text-2xl font-bold mb-2'>⚡ Limited Time Offer!</h3>
				<p>No service fee for tasks posted this week. Grab the opportunity now!</p>
				<Link
					to='/add-task'
					className='btn btn-outline btn-white mt-4'
				>
					Post a Task
				</Link>
			</div>
			<FAQ />
		</div>
	);
};

export default Home;
