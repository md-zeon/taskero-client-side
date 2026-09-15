import { Component } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.error("ErrorBoundary caught:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className='flex min-h-[60vh] flex-col items-center justify-center px-4 text-center'>
					<div className='mb-4 grid size-16 place-items-center rounded-2xl bg-destructive/10 text-destructive'>
						<AlertTriangle className='size-8' />
					</div>
					<h2 className='mb-2 text-2xl font-bold'>Something went wrong</h2>
					<p className='mb-6 max-w-md text-muted-foreground'>
						An unexpected error occurred. Please try refreshing the page.
					</p>
					<Button onClick={() => window.location.reload()}>
						<RefreshCw className='size-4' /> Refresh Page
					</Button>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
