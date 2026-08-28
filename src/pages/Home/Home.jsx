import SiteTitle from "../../components/SiteTitle";
import Banner from "./Banner";
import FeaturedTasks from "./FeaturedTasks";
import HowItWorks from "./HowItWorks";
import FAQ from "./FAQ";
import { useLoaderData } from "react-router";
import HighlightedTasks from "./HighlightedTasks";
import Categories from "./Categories";
import Newsletter from "./Newsletter";

const Home = () => {
	const featuredTasks = useLoaderData() || [];

	return (
		<div className='mx-auto max-w-360 space-y-4 px-4'>
			<SiteTitle>Home</SiteTitle>
			<Banner />
			<HowItWorks />
			<FeaturedTasks tasks={featuredTasks} />
			<HighlightedTasks />
			<Categories />
			<FAQ />
			<Newsletter />
		</div>
	);
};

export default Home;
