import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./context/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
AOS.init({ duration: 1000 });

createRoot(document.getElementById("root")).render(
	<>
		<AuthProvider>
			<HelmetProvider>
				<RouterProvider router={router} />
			</HelmetProvider>
		</AuthProvider>
		<ToastContainer />
	</>,
);
