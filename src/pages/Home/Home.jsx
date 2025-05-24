import SiteTitle from "../../components/SiteTitle";
import Banner from "./Banner";
import FeaturedTasks from "./FeaturedTasks";
import HowItWorks from "./HowItWorks";
import FAQ from "./FAQ";
import { useLoaderData } from "react-router";
const Home = () => {
	const featuredTasks = useLoaderData();

	return (
		<div className='max-w-7xl mx-auto px-4'>
			<SiteTitle>Home</SiteTitle>
			<Banner />
			<HowItWorks />
			<FeaturedTasks tasks={featuredTasks} />
			<FAQ />
		</div>
	);
};

export default Home;
