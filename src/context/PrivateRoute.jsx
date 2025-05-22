import { use } from "react";
import AuthContext from "./AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
	const { user, loading } = use(AuthContext);
	const location = useLocation();
	if (loading) {
		return <Loader />;
	}

	if (user && user?.email) {
		return children;
	}

	return (
		<Navigate
			to='/login'
			state={location?.pathname}
		/>
	);
};

export default PrivateRoute;
