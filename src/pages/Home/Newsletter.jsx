import { useState } from "react";
import { toast } from "react-toastify";
import { SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Reveal from "../../components/Reveal";

const Newsletter = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		toast.success("Thank you for subscribing!");
		setEmail("");
	};

	return (
		<section className='py-12'>
			<Reveal>
				<div className='relative mx-auto max-w-4xl overflow-hidden rounded-3xl border bg-muted/60 p-8 md:p-12'>
					<div className='pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-primary/10 blur-2xl' />
					<div className='relative text-center'>
						<span className='mb-4 inline-block rounded-full border bg-background px-3 py-1 text-sm font-medium text-muted-foreground'>
							Newsletter
						</span>
						<h2 className='mb-3 text-3xl font-bold tracking-tight md:text-4xl'>
							Stay in the Loop
						</h2>
						<p className='mx-auto mb-8 max-w-xl text-muted-foreground'>
							Get new freelance tasks, platform updates, and exclusive offers
							delivered straight to your inbox.
						</p>

						<form
							className='mx-auto flex max-w-xl flex-col items-stretch gap-2 sm:flex-row'
							onSubmit={handleSubmit}
						>
							<Input
								type='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								placeholder='Enter your email'
								className='flex-1'
							/>
							<Button type='submit' className='gap-2'>
								<SendHorizonal className='size-4' /> Subscribe
							</Button>
						</form>
					</div>
				</div>
			</Reveal>
		</section>
	);
};

export default Newsletter;
