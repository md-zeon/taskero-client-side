import { use, useState } from "react";
import {
	Eye,
	EyeOff,
	Mail,
	Lock,
	Loader2,
	ShieldCheck,
	Briefcase,
	TrendingUp,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import SiteTitle from "../../components/SiteTitle";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Reveal from "../../components/Reveal";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const { signIn, signInWithGoogle } = use(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();

	const [form, setForm] = useState({ email: "", password: "" });

	const handleLogin = (e) => {
		e.preventDefault();
		setSubmitting(true);
		signIn(form.email, form.password)
			.then((result) => {
				toast.success(`Login successful! Welcome ${result.user.displayName}`);
				setForm({ email: "", password: "" });
				navigate(location?.state || "/");
			})
			.catch((error) => {
				toast.error(error.message);
			})
			.finally(() => setSubmitting(false));
	};

	const handleGoogleLogin = () => {
		signInWithGoogle()
			.then((result) => {
				toast.success(`Login successful! Welcome ${result.user.displayName}`);
				navigate(location?.state || "/");
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	const perks = [
		{ icon: <Briefcase className='size-4' />, text: "Post and manage tasks easily" },
		{ icon: <TrendingUp className='size-4' />, text: "Track bids and opportunities" },
		{ icon: <ShieldCheck className='size-4' />, text: "Connect with trusted clients" },
	];

	return (
		<div className='flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-10'>
			<SiteTitle>Login</SiteTitle>
			<Reveal>
				<div className='grid w-full max-w-4xl overflow-hidden rounded-3xl border bg-card shadow-soft md:grid-cols-2'>
					<div className='hidden flex-col justify-between bg-muted p-10 md:flex'>
						<div>
							<h2 className='mb-3 text-3xl font-bold tracking-tight'>
								Welcome back
							</h2>
							<p className='mb-8 text-muted-foreground'>
								Log in to post tasks, manage your listings, and pick up new
								freelance opportunities.
							</p>
						</div>
						<ul className='space-y-3 text-sm text-muted-foreground'>
							{perks.map((perk, idx) => (
								<li key={idx} className='flex items-center gap-2'>
									<span className='grid size-6 place-items-center rounded-md bg-primary/10 text-primary'>
										{perk.icon}
									</span>
									{perk.text}
								</li>
							))}
						</ul>
					</div>

					<div className='p-8 md:p-10'>
						<h1 className='mb-6 flex items-center gap-2 text-2xl font-bold tracking-tight'>
							Login to Taskero
						</h1>

						<form onSubmit={handleLogin} className='space-y-4'>
							<div className='grid gap-2'>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									type='email'
									value={form.email}
									onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
									placeholder='you@example.com'
									autoComplete='email'
									required
								/>
							</div>

							<div className='grid gap-2'>
								<Label htmlFor='password' className='flex items-center gap-2'>
									<Lock className='size-3.5 text-primary' /> Password
								</Label>
								<div className='relative'>
									<Input
										id='password'
										type={showPassword ? "text" : "password"}
										value={form.password}
										onChange={(e) =>
											setForm((f) => ({ ...f, password: e.target.value }))
										}
										placeholder='Your password'
										autoComplete='current-password'
										className='pr-10'
										required
									/>
									<button
										type='button'
										onClick={() => setShowPassword(!showPassword)}
										className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary'
										aria-label={showPassword ? "Hide password" : "Show password"}
									>
										{showPassword ? (
											<EyeOff className='size-4' />
										) : (
											<Eye className='size-4' />
										)}
									</button>
								</div>
							</div>

							<Button type='submit' className='w-full' size='lg' disabled={submitting}>
								{submitting && <Loader2 className='size-4 animate-spin' />}
								Login
							</Button>
						</form>

						<div className='my-5 flex items-center gap-3'>
							<Separator className='flex-1' />
							<span className='text-sm text-muted-foreground'>OR</span>
							<Separator className='flex-1' />
						</div>

						<Button
							onClick={handleGoogleLogin}
							variant='outline'
							className='w-full gap-2'
							size='lg'
						>
							<Mail className='size-4' /> Continue with Google
						</Button>

						<p className='mt-6 text-center text-sm text-muted-foreground'>
							New to Taskero?{" "}
							<Link to='/signup' className='font-semibold text-primary hover:underline'>
								Create an account
							</Link>
						</p>
					</div>
				</div>
			</Reveal>
		</div>
	);
};

export default Login;
