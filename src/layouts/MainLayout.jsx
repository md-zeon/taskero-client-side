import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
	return (
		<div>
			<Navbar />
			<div className='max-w-7xl mx-auto'>
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;
