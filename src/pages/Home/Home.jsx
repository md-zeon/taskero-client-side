import SiteTitle from "../../components/SiteTitle";
import Banner from "./Banner";
import FeaturedTasks from "./FeaturedTasks";
import HowItWorks from "./HowItWorks";
import FAQ from "./FAQ";
import { Link, useLoaderData } from "react-router";
import HighlightedTasks from "./HighlightedTasks";
import Categories from "./Categories";
import Newsletter from "./Newsletter";
const Home = () => {
	const featuredTasks = useLoaderData();

	return (
		<div className='max-w-7xl mx-auto space-y-8'>
			<SiteTitle>Home</SiteTitle>
			<Banner />
			<HowItWorks />
			<FeaturedTasks tasks={featuredTasks} />
			<HighlightedTasks tasks={featuredTasks} />
			<Categories />
			<FAQ />
			<Newsletter />
		</div>
	);
};

export default Home;
