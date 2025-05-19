import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
	{
		path: "/",
        Component: MainLayout,
        children: [
            {
                path: "/",
                element: <div>Home</div>
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
