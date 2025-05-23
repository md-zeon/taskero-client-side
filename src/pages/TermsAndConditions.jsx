import { Typewriter } from "react-simple-typewriter";

const TermsAndConditions = () => {
	return (
		<div
			className='max-w-7xl mx-auto p-4'
			data-aos='fade-up'
		>
			<h2 className='text-3xl font-bold my-6 text-primary'>Terms and Conditions</h2>
			<div className='card bg-base-100 shadow-xl'>
				<div className='card-body'>
					<section
						className='mb-6'
						data-aos='fade-up'
						data-aos-delay='100'
					>
						<h3 className='text-2xl font-semibold mb-2'>1. Introduction</h3>
						<p className='text-base-content'>
							Welcome to Taskero, a freelance task marketplace connecting clients and freelancers. By accessing or using
							our platform, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use
							Taskero.
						</p>
					</section>

					<section
						className='mb-6'
						data-aos='fade-up'
						data-aos-delay='200'
					>
						<h3 className='text-2xl font-semibold mb-2'>2. User Accounts</h3>
						<p className='text-base-content'>
							You must create an account to post or bid on tasks. You are responsible for maintaining the
							confidentiality of your account credentials and for all activities under your account. Taskero reserves
							the right to suspend or terminate accounts for violations of these terms.
						</p>
					</section>

					<section
						className='mb-6'
						data-aos='fade-up'
						data-aos-delay='300'
					>
						<h3 className='text-2xl font-semibold mb-2'>3. Posting Tasks</h3>
						<p className='text-base-content'>
							Clients may post tasks with clear descriptions, categories, budgets, and deadlines. Taskero is not
							responsible for the accuracy of task details. Clients must honor agreements with freelancers and make
							payments upon task completion.
						</p>
					</section>

					<section
						className='mb-6'
						data-aos='fade-up'
						data-aos-delay='400'
					>
						<h3 className='text-2xl font-semibold mb-2'>4. Bidding on Tasks</h3>
						<p className='text-base-content'>
							Freelancers may place bids on tasks. Bids are binding offers to complete the task for the specified
							amount. Taskero does not guarantee task assignments and is not liable for disputes arising from bid
							agreements.
						</p>
					</section>

					<section
						className='mb-6'
						data-aos='fade-up'
						data-aos-delay='500'
					>
						<h3 className='text-2xl font-semibold mb-2'>5. Payments</h3>
						<p className='text-base-content'>
							Payments are processed securely through Taskero’s payment system. Clients must pay freelancers upon
							satisfactory task completion. Taskero may charge a service fee, disclosed at the time of payment. Refunds
							are subject to our refund policy.
						</p>
					</section>

					<section
						className='mb-6'
						data-aos='fade-up'
						data-aos-delay='600'
					>
						<h3 className='text-2xl font-semibold mb-2'>6. Dispute Resolution</h3>
						<p className='text-base-content'>
							Disputes between clients and freelancers should be resolved directly. Taskero may mediate disputes but is
							not obligated to do so. Users agree to provide accurate information during dispute resolution processes.
						</p>
					</section>

					<section
						className='mb-6'
						data-aos='fade-up'
						data-aos-delay='700'
					>
						<h3 className='text-2xl font-semibold mb-2'>7. Prohibited Activities</h3>
						<p className='text-base-content'>
							Users may not post illegal, offensive, or misleading content. Prohibited activities include fraud,
							harassment, and bypassing Taskero’s payment system. Violations may result in account suspension or
							termination.
						</p>
					</section>

					<section
						className='mb-6'
						data-aos='fade-up'
						data-aos-delay='800'
					>
						<h3 className='text-2xl font-semibold mb-2'>8. Termination</h3>
						<p className='text-base-content'>
							Taskero may terminate or suspend access to the platform for any reason, including violation of these
							terms. Users may terminate their accounts at any time, subject to settling outstanding payments.
						</p>
					</section>

					<section
						className='mb-6'
						data-aos='fade-up'
						data-aos-delay='900'
					>
						<h3 className='text-2xl font-semibold mb-2'>9. Changes to Terms</h3>
						<p className='text-base-content'>
							Taskero may update these Terms and Conditions at any time. Continued use of the platform after changes
							constitutes acceptance of the new terms. We will notify users of significant changes via email or platform
							announcements.
						</p>
					</section>

					<section
						data-aos='fade-up'
						data-aos-delay='1000'
					>
						<h3 className='text-2xl font-semibold mb-2'>10. Contact Us</h3>
						<p className='text-base-content'>
							For questions about these Terms and Conditions, contact us at{" "}
							<a
								href='mailto:support@taskero.com'
								className='link link-primary'
							>
								support@taskero.com
							</a>{" "}
							or call +880 1523-456789.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
};

export default TermsAndConditions;
