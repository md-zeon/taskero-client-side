import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
	{
		path: "/",
        Component: MainLayout,
        children: [
            {
                path: "/",
                Component: Home,
            },
            {
                path: "/add-task",
                element: <div>Add Task</div>
            },
            {
                path: "/browse-tasks",
                element: <div>Browse Tasks</div>
            },
            {
                path: "my-posted-tasks",
                element: <div>My Posted Tasks</div>
            },
            {
                path: "login",
                element: <div>Login</div>
            },
            {
                path: "signup",
                element: <div>Signup</div>
            }
        ]
	},
]);

export default router;
