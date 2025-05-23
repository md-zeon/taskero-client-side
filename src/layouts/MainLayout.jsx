import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const MainLayout = () => {
	const state = useNavigation();
	return (
		<>
			<header className='max-w-7xl mx-auto'>
				<Navbar />
			</header>
			<main className='max-w-7xl mx-auto pb-10'>
				{state === "loading" ? <Loader /> : <Outlet />}
			</main>
			<footer className="bg-base-200">
				<Footer />
			</footer>
		</>
	);
};

export default MainLayout;
