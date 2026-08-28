import { use, useState } from "react";
import {
	Eye,
	EyeOff,
	Mail,
	Lock,
	Loader2,
	Rocket,
	ClipboardList,
	Globe,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import SEO from "../../components/SEO";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Reveal from "../../components/Reveal";

const Signup = () => {
	const { createUser, updateUserProfile, signInWithGoogle } = use(AuthContext);
	const [showPassword, setShowPassword] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		photoURL: "",
		password: "",
	});
	const location = useLocation();
	const navigate = useNavigate();

	const setField = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

	const password = form.password;
	const passwordChecks = [
		{ label: "At least 6 characters", ok: password.length >= 6 },
		{ label: "One uppercase letter", ok: /[A-Z]/.test(password) },
		{ label: "One lowercase letter", ok: /[a-z]/.test(password) },
	];

	const handleGoogleSignIn = () => {
		signInWithGoogle()
			.then((res) => {
				toast.success(`Welcome ${res.user.displayName}`);
				navigate(location?.state || "/");
			})
			.catch((err) => {
				toast.error(err.message);
			});
	};

	const handleSignUp = (e) => {
		e.preventDefault();
		setSubmitting(true);

		if (password.length < 6) {
			toast.error("Password must be at least 6 characters");
			setSubmitting(false);
			return;
		}
		if (!/[A-Z]/.test(password)) {
			toast.error("Password must contain at least one uppercase letter");
			setSubmitting(false);
			return;
		}
		if (!/[a-z]/.test(password)) {
			toast.error("Password must contain at least one lowercase letter");
			setSubmitting(false);
			return;
		}

		createUser(form.email, password)
			.then(() => {
				updateUserProfile(form.name, form.photoURL)
					.then(() => {
						toast.success("Account created successfully");
						setForm({ name: "", email: "", photoURL: "", password: "" });
						navigate(location?.state || "/");
					})
					.catch((err) => {
						toast.error(err.message);
					});
			})
			.catch((err) => {
				toast.error(err.message);
			})
			.finally(() => setSubmitting(false));
	};

	const perks = [
		{ icon: <Rocket className='size-4' />, text: "Free to sign up and browse" },
		{ icon: <ClipboardList className='size-4' />, text: "Post tasks in minutes" },
		{ icon: <Globe className='size-4' />, text: "Reach clients or freelancers globally" },
	];

	return (
		<div className='flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-10'>
			<SEO title='Sign Up'
				description='Create your free Taskero account to post tasks or start freelancing and earning today.'
			/>
			<Reveal>
				<div className='grid w-full max-w-4xl overflow-hidden rounded-3xl border bg-card shadow-soft md:grid-cols-2'>
					<div className='hidden flex-col justify-between bg-muted p-10 md:flex'>
						<div>
							<h2 className='mb-3 text-3xl font-bold tracking-tight'>Join Taskero</h2>
							<p className='mb-8 text-muted-foreground'>
								Create your free account and start posting tasks or earning as a
								freelancer today.
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
						<h1 className='mb-6 text-2xl font-bold tracking-tight'>
							Create your account
						</h1>

						<form onSubmit={handleSignUp} className='space-y-4'>
							<div className='grid gap-2'>
								<Label htmlFor='name'>Full Name</Label>
								<Input
									id='name'
									value={form.name}
									onChange={setField("name")}
									placeholder='Your name'
									autoComplete='name'
									required
								/>
							</div>

							<div className='grid gap-2'>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									type='email'
									value={form.email}
									onChange={setField("email")}
									placeholder='you@example.com'
									autoComplete='email'
									required
								/>
							</div>

							<div className='grid gap-2'>
								<Label htmlFor='photoURL'>Profile Photo URL</Label>
								<Input
									id='photoURL'
									value={form.photoURL}
									onChange={setField("photoURL")}
									placeholder='https://... (optional)'
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
										onChange={setField("password")}
										placeholder='Create a password'
										autoComplete='new-password'
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
								<div className='mt-1 flex flex-wrap gap-x-4 gap-y-1'>
									{passwordChecks.map((check, idx) => (
										<span
											key={idx}
											className={`flex items-center gap-1 text-xs ${
												check.ok ? "text-success" : "text-muted-foreground/60"
											}`}
										>
											<span
												className={`size-1.5 rounded-full ${
													check.ok ? "bg-success" : "bg-muted-foreground/40"
												}`}
											/>
											{check.label}
										</span>
									))}
								</div>
							</div>

							<Button type='submit' className='w-full' size='lg' disabled={submitting}>
								{submitting && <Loader2 className='size-4 animate-spin' />}
								Create Account
							</Button>
						</form>

						<div className='my-5 flex items-center gap-3'>
							<Separator className='flex-1' />
							<span className='text-sm text-muted-foreground'>OR</span>
							<Separator className='flex-1' />
						</div>

						<Button
							onClick={handleGoogleSignIn}
							variant='outline'
							className='w-full gap-2'
							size='lg'
						>
							<Mail className='size-4' /> Sign up with Google
						</Button>

						<p className='mt-6 text-center text-sm text-muted-foreground'>
							Already have an account?{" "}
							<Link to='/login' className='font-semibold text-primary hover:underline'>
								Login
							</Link>
						</p>
					</div>
				</div>
			</Reveal>
		</div>
	);
};

export default Signup;
