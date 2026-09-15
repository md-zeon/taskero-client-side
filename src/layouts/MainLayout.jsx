import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const MainLayout = () => {
	const { state } = useNavigation();
	return (
		<div className='flex min-h-screen flex-col'>
			<Navbar />
			<main id='main-content' className='flex-1'>
				{state === "loading" ? <Loader /> : <Outlet />}
			</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
