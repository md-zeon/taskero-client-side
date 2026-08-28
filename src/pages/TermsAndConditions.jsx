import GoBack from "../components/GoBack";
import SEO from "../components/SEO";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
	{
		num: "1",
		title: "Introduction",
		body: (
			<>
				Welcome to Taskero, a freelance task marketplace connecting clients and
				freelancers. By accessing or using our platform, you agree to be bound by these
				Terms and Conditions. If you do not agree, please do not use Taskero.
			</>
		),
	},
	{
		num: "2",
		title: "User Accounts",
		body: (
			<>
				You must create an account to post or bid on tasks. You are responsible for
				maintaining the confidentiality of your account credentials and for all
				activities under your account. Taskero reserves the right to suspend or
				terminate accounts for violations of these terms.
			</>
		),
	},
	{
		num: "3",
		title: "Posting Tasks",
		body: (
			<>
				Clients may post tasks with clear descriptions, categories, budgets, and
				deadlines. Taskero is not responsible for the accuracy of task details. Clients
				must honor agreements with freelancers and make payments upon task completion.
			</>
		),
	},
	{
		num: "4",
		title: "Bidding on Tasks",
		body: (
			<>
				Freelancers may place bids on tasks. Bids are binding offers to complete the
				task for the specified amount. Taskero does not guarantee task assignments and
				is not liable for disputes arising from bid agreements.
			</>
		),
	},
	{
		num: "5",
		title: "Payments",
		body: (
			<>
				Payments are processed securely through Taskero’s payment system. Clients must
				pay freelancers upon satisfactory task completion. Taskero may charge a service
				fee, disclosed at the time of payment. Refunds are subject to our refund policy.
			</>
		),
	},
	{
		num: "6",
		title: "Dispute Resolution",
		body: (
			<>
				Disputes between clients and freelancers should be resolved directly. Taskero
				may mediate disputes but is not obligated to do so. Users agree to provide
				accurate information during dispute resolution processes.
			</>
		),
	},
	{
		num: "7",
		title: "Prohibited Activities",
		body: (
			<>
				Users may not post illegal, offensive, or misleading content. Prohibited
				activities include fraud, harassment, and bypassing Taskero’s payment system.
				Violations may result in account suspension or termination.
			</>
		),
	},
	{
		num: "8",
		title: "Termination",
		body: (
			<>
				Taskero may terminate or suspend access to the platform for any reason,
				including violation of these terms. Users may terminate their accounts at any
				time, subject to settling outstanding payments.
			</>
		),
	},
	{
		num: "9",
		title: "Changes to Terms",
		body: (
			<>
				Taskero may update these Terms and Conditions at any time. Continued use of the
				platform after changes constitutes acceptance of the new terms. We will notify
				users of significant changes via email or platform announcements.
			</>
		),
	},
	{
		num: "10",
		title: "Contact Us",
		body: (
			<>
				For questions about these Terms and Conditions, contact us at{" "}
				<a
					href='mailto:support@taskero.com'
					className='font-medium text-primary underline-offset-4 hover:underline'
				>
					support@taskero.com
				</a>{" "}
				or call +880 1523-456789.
			</>
		),
	},
];

const TermsAndConditions = () => {
	return (
		<div className='mx-auto max-w-4xl px-4 py-10'>
			<SEO title='Terms and Conditions'
				description='Read the Terms and Conditions governing your use of Taskero, the freelance task marketplace for clients and freelancers.'
			/>
			<GoBack />
			<h2 className='my-6 text-3xl font-bold tracking-tight'>
				Terms and Conditions
			</h2>
			<Card>
				<CardContent className='divide-y'>
					{sections.map((section) => (
						<section key={section.num} className='py-6 first:pt-2 last:pb-2'>
							<h3 className='mb-2 text-lg font-semibold'>
								{section.num}. {section.title}
							</h3>
							<p className='leading-relaxed text-muted-foreground'>
								{section.body}
							</p>
						</section>
					))}
				</CardContent>
			</Card>
		</div>
	);
};

export default TermsAndConditions;
