import { CheckSquare2, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const Footer = () => {
	const year = new Date().getFullYear();

	const platformLinks = [
		{ to: "/browse-tasks", label: "Browse Tasks" },
		{ to: "/dashboard/add-task", label: "Post a Task" },
		{ to: "/dashboard", label: "Dashboard" },
	];
	const companyLinks = [
		{ to: "/about-us", label: "About Us" },
		{ to: "/contact-us", label: "Contact Us" },
		{ to: "/terms", label: "Terms & Conditions" },
	];

	return (
		<footer className='border-t bg-background'>
			<div className='container-tight pt-16 pb-8'>
				{/* CTA band — muted surface, no loud gradient behind text */}
				<div className='mb-14 flex flex-col items-start gap-6 rounded-2xl border bg-muted p-8 md:flex-row md:items-center md:justify-between md:p-10'>
					<div>
						<h3 className='text-2xl font-bold tracking-tight md:text-3xl'>
							Ready to get things done?
						</h3>
						<p className='mt-2 text-muted-foreground'>
							Post a task or start earning as a freelancer today.
						</p>
					</div>
					<div className='flex flex-col gap-3 sm:flex-row md:shrink-0'>
						<Button asChild size='lg'>
							<Link to='/dashboard/add-task'>Post a Task</Link>
						</Button>
						<Button asChild size='lg' variant='outline'>
							<Link to='/browse-tasks'>Browse Tasks</Link>
						</Button>
					</div>
				</div>

				<div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4'>
					{/* Brand */}
					<div>
						<Link to='/' className='flex items-center gap-2 font-bold'>
							<span className='grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground'>
								<CheckSquare2 className='size-5' />
							</span>
							<span className='text-xl tracking-tight'>Taskero</span>
						</Link>
						<p className='mt-4 text-sm leading-relaxed text-muted-foreground'>
							Taskero is a freelance task marketplace where clients and
							freelancers connect for small, meaningful work opportunities.
						</p>
						<div className='mt-5 flex gap-2'>
							{[
								{ href: "https://facebook.com", label: "Facebook" },
								{ href: "https://twitter.com", label: "X" },
								{ href: "https://linkedin.com", label: "In" },
							].map(({ href, label }) => (
								<a
									key={label}
									href={href}
									target='_blank'
									rel='noreferrer'
									aria-label={label}
									className='grid size-9 place-items-center rounded-md border text-sm font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary'
								>
									{label}
								</a>
							))}
						</div>
					</div>

					{/* Platform */}
					<div>
						<h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-foreground'>
							Platform
						</h3>
						<ul className='space-y-3 text-sm'>
							{platformLinks.map((l) => (
								<li key={l.to}>
									<Link
										to={l.to}
										className='text-muted-foreground transition-colors hover:text-foreground'
									>
										{l.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-foreground'>
							Company
						</h3>
						<ul className='space-y-3 text-sm'>
							{companyLinks.map((l) => (
								<li key={l.to}>
									<Link
										to={l.to}
										className='text-muted-foreground transition-colors hover:text-foreground'
									>
										{l.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-foreground'>
							Contact
						</h3>
						<ul className='space-y-3 text-sm text-muted-foreground'>
							<li className='flex items-center gap-2'>
								<Mail className='size-4 shrink-0 text-primary' />
								support@taskero.com
							</li>
							<li className='flex items-center gap-2'>
								<Phone className='size-4 shrink-0 text-primary' />
								+880 1523-456789
							</li>
							<li className='flex items-center gap-2'>
								<MapPin className='size-4 shrink-0 text-primary' />
								Dhaka, Bangladesh
							</li>
						</ul>
					</div>
				</div>

				<div className='mt-12 border-t pt-6'>
					<p className='text-center text-sm text-muted-foreground'>
						&copy; {year}{" "}
						<span className='font-semibold text-foreground'>Taskero</span>. All
						rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
