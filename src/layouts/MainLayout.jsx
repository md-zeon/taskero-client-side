import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Loader from "../components/Loader";

const MainLayout = () => {
	const state = useNavigation();
	return (
		<div>
			<div className='max-w-7xl mx-auto'>
				<Navbar />
			</div>
			<div className='max-w-7xl mx-auto'>{state === 'loading' ? <Loader /> : <Outlet />}</div>
		</div>
	);
};

export default MainLayout;
