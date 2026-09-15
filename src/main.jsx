import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/routes.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ErrorBoundary>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</ErrorBoundary>
		<ToastContainer
			position='top-center'
			autoClose={3000}
			hideProgressBar
			theme='colored'
			limit={3}
		/>
	</StrictMode>,
);
