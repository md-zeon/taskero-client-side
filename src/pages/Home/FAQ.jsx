import { HelpCircle } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "../../components/Reveal";

const faqs = [
	{
		q: "How do I post a task on Taskero?",
		a: "To post a task, sign up or log in to your Taskero account. Navigate to the \"Add Task\" page from the navbar, fill in details like task title, category, description, deadline, and budget, then click \"Submit Task.\" You'll receive a confirmation, and freelancers can start bidding on your task.",
	},
	{
		q: "How can I bid on a task?",
		a: "Browse available tasks on the \"Browse Tasks\" page. Click \"See Details\" on a task to view its full details. If you're logged in, you can place a bid by clicking the \"Place Bid\" button on the task details page. The task owner will be notified of your bid.",
	},
	{
		q: "Is Taskero free to use?",
		a: "Yes, Taskero offers free access to post and browse tasks. Posting tasks and bidding are also free. A small service fee may apply on completed transactions.",
	},
	{
		q: "How do I sign up or log in to Taskero?",
		a: "Click \"Sign Up\" or \"Login\" in the navbar. You can register with your email and password or use Google authentication. For signup, provide your name, email, photo URL, and a password (at least 6 characters with uppercase and lowercase letters). After logging in, you can access private features like posting tasks or viewing your posted tasks.",
	},
	{
		q: "Can I edit or delete a task I posted?",
		a: "Yes, go to the \"My Posted Tasks\" page to see all tasks you've posted. Click the \"Edit\" button to update task details or the \"Delete\" button to remove a task. You'll be asked to confirm deletion to prevent accidental removal.",
	},
];

const FAQ = () => {
	return (
		<div className='mx-auto max-w-3xl py-12'>
			<div className='mb-8 flex flex-col items-center'>
				<div className='mb-5 grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary'>
					<HelpCircle className='size-7' />
				</div>
				<SectionHeader
					eyebrow='FAQ'
					title='Frequently Asked Questions'
					description='Find answers to common questions about using Taskero as a client or a freelancer.'
				/>
			</div>

			<Reveal delay={0.05}>
				<Card>
					<CardContent className='p-4 sm:p-6'>
						<Accordion type='single' collapsible className='w-full'>
							{faqs.map((faq, idx) => (
								<AccordionItem key={idx} value={`item-${idx}`}>
									<AccordionTrigger>{faq.q}</AccordionTrigger>
									<AccordionContent>{faq.a}</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</CardContent>
				</Card>
			</Reveal>
		</div>
	);
};

export default FAQ;
