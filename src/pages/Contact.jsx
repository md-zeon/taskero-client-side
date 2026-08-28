import { Mail, Phone, MapPin, User, Send, Loader2 } from "lucide-react";
import SiteTitle from "../components/SiteTitle";
import { toast } from "react-toastify";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "../components/Reveal";

const Contact = () => {
	const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
	const [sending, setSending] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSending(true);
		setTimeout(() => {
			toast.success("Thanks for contacting Taskero! We'll get back to you soon.");
			setForm({ name: "", email: "", subject: "", message: "" });
			setSending(false);
		}, 600);
	};

	const contactInfo = [
		{ icon: <Mail className='size-6' />, label: "Email", value: "support@taskero.com" },
		{ icon: <Phone className='size-6' />, label: "Phone", value: "+880 1523-456789" },
		{ icon: <MapPin className='size-6' />, label: "Location", value: "Dhaka, Bangladesh" },
	];

	const inputProps = (name, value) => ({
		name,
		value,
		onChange: handleChange,
	});

	return (
		<div className='mx-auto max-w-360 px-4 py-12'>
			<SiteTitle>Contact Us</SiteTitle>

			<div className='mb-14 text-center'>
				<span className='mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary'>
					Contact
				</span>
				<h2 className='mb-4 text-4xl font-extrabold tracking-tight md:text-5xl'>
					Get in Touch
				</h2>
				<p className='mx-auto max-w-2xl text-lg text-muted-foreground'>
					Have a question, suggestion, or feedback? We'd love to hear from you.
				</p>
			</div>

			<Reveal>
				<div className='grid items-start gap-10 lg:grid-cols-5'>
					<div className='space-y-4 lg:col-span-2'>
						{contactInfo.map((info, idx) => (
							<Card key={idx}>
								<CardContent className='flex items-center gap-4 p-5'>
									<div className='grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary'>
										{info.icon}
									</div>
									<div>
										<h4 className='font-bold'>{info.label}</h4>
										<p className='text-muted-foreground'>{info.value}</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					<form
						onSubmit={handleSubmit}
						className='space-y-4 rounded-2xl border bg-card p-6 shadow-sm md:p-8 lg:col-span-3'
					>
						<div className='grid gap-4 md:grid-cols-2'>
							<div className='grid gap-2'>
								<Label htmlFor='name'>Your Name</Label>
								<div className='relative'>
									<User className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground/60' />
									<Input
										id='name'
										type='text'
										{...inputProps("name", form.name)}
										required
										placeholder='Your name'
										className='pl-9'
									/>
								</div>
							</div>
							<div className='grid gap-2'>
								<Label htmlFor='email'>Your Email</Label>
								<div className='relative'>
									<Mail className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground/60' />
									<Input
										id='email'
										type='email'
										{...inputProps("email", form.email)}
										required
										placeholder='you@example.com'
										className='pl-9'
									/>
								</div>
							</div>
						</div>

						<div className='grid gap-2'>
							<Label htmlFor='subject'>Subject (Optional)</Label>
							<Input
								id='subject'
								type='text'
								{...inputProps("subject", form.subject)}
								placeholder='What is this about?'
							/>
						</div>

						<div className='grid gap-2'>
							<Label htmlFor='message'>Message</Label>
							<Textarea
								id='message'
								{...inputProps("message", form.message)}
								required
								placeholder='Tell us how we can help...'
								rows={5}
							/>
						</div>

						<Button type='submit' className='w-full' size='lg' disabled={sending}>
							{sending ? (
								<Loader2 className='size-4 animate-spin' />
							) : (
								<Send className='size-4' />
							)}
							Send Message
						</Button>
					</form>
				</div>
			</Reveal>
		</div>
	);
};

export default Contact;
