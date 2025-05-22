import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../context/PrivateRoute";
import AddTask from "../pages/Tasks/AddTasks";
import BrowseTasks from "../pages/Tasks/BrowseTasks";
import Loader from "../components/Loader";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
		errorElement: <NotFound />,
		children: [
			{
				path: "/",
				Component: Home,
			},
			{
				path: "/add-task",
				element: (
					<PrivateRoute>
						<AddTask />
					</PrivateRoute>
				),
			},
			{
				path: "/browse-tasks",
				loader: () => fetch("http://localhost:5000/tasks"),
				Component: BrowseTasks,
				hydrateFallbackElement: <Loader />,
			},
			{
				path: "/my-posted-tasks",
				element: (
					<PrivateRoute>
						<div>My Posted Tasks</div>
					</PrivateRoute>
				),
			},
			{
				path: "/login",
				Component: Login,
			},
			{
				path: "/signup",
				Component: Signup,
			},
		],
	},
]);

export default router;
