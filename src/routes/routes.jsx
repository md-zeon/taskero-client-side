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
import TaskDetails from "../pages/Tasks/TaskDetails";
import MyPostedTasks from "../pages/Tasks/MyPostedTasks";
import EditTask from "../pages/Tasks/EditTask";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
		errorElement: <NotFound />,
		hydrateFallbackElement: <Loader />,
		children: [
			{
				path: "/",
				loader: () => fetch("https://taskero-server.vercel.app/tasks?limit=6&sort=deadline"),
				Component: Home,
				hydrateFallbackElement: <Loader />,
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
				loader: () => fetch("https://taskero-server.vercel.app/tasks"),
				Component: BrowseTasks,
				hydrateFallbackElement: <Loader />,
			},
			{
				path: "/task/:id",
				loader: ({ params }) => fetch(`https://taskero-server.vercel.app/tasks/${params.id}`),
				element: (
					<PrivateRoute>
						<TaskDetails />
					</PrivateRoute>
				),
				hydrateFallbackElement: <Loader />,
			},
			{
				path: "/edit-task/:id",
				element: (
					<PrivateRoute>
						<EditTask />
					</PrivateRoute>
				),
				loader: ({ params }) => fetch(`https://taskero-server.vercel.app/tasks/${params.id}`),
				hydrateFallbackElement: <Loader />,
			},
			{
				path: "/my-posted-tasks",
				element: (
					<PrivateRoute>
						<MyPostedTasks />
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
