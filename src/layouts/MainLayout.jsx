import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const MainLayout = () => {
	const { state } = useNavigation();
	return (
		<>
			<header className='sticky top-0 border-b border-b-primary z-50'>
				<Navbar />
			</header>
			<main className='max-w-7xl mx-auto pb-10 px-4'>{state === "loading" ? <Loader /> : <Outlet />}</main>
			<footer className='bg-base-200'>
				<Footer />
			</footer>
		</>
	);
};

export default MainLayout;
