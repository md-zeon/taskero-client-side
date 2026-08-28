import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeController = () => {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		const stored = localStorage.getItem("taskero-theme");
		const initialDark =
			stored === "dark" ||
			(!stored && window.matchMedia?.("(prefers-color-scheme: dark)").matches);
		setDark(initialDark);
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", dark);
		localStorage.setItem("taskero-theme", dark ? "dark" : "light");
	}, [dark]);

	return (
		<Button
			variant='ghost'
			size='icon'
			onClick={() => setDark((d) => !d)}
			aria-label='Toggle dark mode'
			title='Toggle theme'
		>
			{dark ? <Sun className='size-5' /> : <Moon className='size-5' />}
		</Button>
	);
};

export default ThemeController;
