import { useState, use } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import {
	User,
	Mail,
	DollarSign,
	Briefcase,
	Clock,
	Gavel,
	CheckCircle2,
	Loader2,
	AlertTriangle,
} from "lucide-react";
import SEO from "../../components/SEO";
import GoBack from "../../components/GoBack";
import AuthContext from "../../context/AuthContext";
import { tasksUrl } from "../../config/api";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const TaskDetails = () => {
	const loadedTask = useLoaderData();
	const { id } = useParams();
	const { user } = use(AuthContext);
	const [bids, setBids] = useState(loadedTask?.bidsCount || 0);
	const [placing, setPlacing] = useState(false);
	const [bidPlaced, setBidPlaced] = useState(false);

	if (!loadedTask) {
		return (
			<div className='flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center px-4 text-center'>
				<div className='mb-4 grid size-16 place-items-center rounded-2xl bg-destructive/10 text-destructive'>
					<AlertTriangle className='size-8' />
				</div>
				<h1 className='mb-2 text-2xl font-bold'>Task not found</h1>
				<p className='mb-6 text-muted-foreground'>
					The task you're looking for doesn't exist or has been removed.
				</p>
				<Button onClick={() => window.history.back()}>Go Back</Button>
			</div>
		);
	}

	const task = loadedTask;
	const isOwner = user?.email === task.userEmail;

	const handleBid = () => {
		if (isOwner) {
			toast.error("You can't bid on your own task.");
			return;
		}
		setPlacing(true);
		fetch(tasksUrl(`/${id}/bids`), {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					setBids(bids + 1);
					setBidPlaced(true);
					toast.success("Bid placed successfully!");
				} else {
					toast.error("Failed to place bid.");
				}
			})
			.catch((err) => {
				console.error(err);
				toast.error("Failed to place bid.");
			})
			.finally(() => setPlacing(false));
	};

	const initials = (task.userName || "?")
		.split(" ")
		.map((n) => n[0])
		.slice(0, 2)
		.join("")
		.toUpperCase();

	return (
		<div className='mx-auto max-w-360 px-4 py-10'>
			<SEO
				title={task.title}
				description={`${task.description || ""} Budget: $${task.budget}. Category: ${task.category}.`}
				type='article'
			/>

			<div className='mb-6'>
				<GoBack />
			</div>

			<div className='grid gap-8 lg:grid-cols-3'>
				<div className='space-y-6 lg:col-span-2'>
					<Card>
						<CardContent className='p-6 md:p-8'>
							<div className='mb-4 flex flex-wrap items-center gap-3'>
								<Badge>{task.category}</Badge>
								<Badge variant='muted'>
									<Gavel className='size-3' /> {bids} bids
								</Badge>
							</div>

							<h1 className='mb-6 text-2xl font-bold tracking-tight md:text-3xl'>
								{task.title}
							</h1>

							<h2 className='mb-3 text-lg font-semibold'>
								Task Description
							</h2>
							<p className='whitespace-pre-line leading-relaxed text-muted-foreground'>
								{task.description}
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardContent className='p-6 md:p-8'>
							<h2 className='mb-4 text-lg font-semibold'>Posted By</h2>
							<div className='flex items-center gap-4'>
								<div className='rounded-full ring-2 ring-primary/30 ring-offset-2 ring-offset-background'>
									<Avatar className='size-14'>
										<AvatarImage src={task.userPhoto} alt={task.userName} />
										<AvatarFallback>{initials}</AvatarFallback>
									</Avatar>
								</div>
								<div>
									<p className='font-semibold'>{task.userName}</p>
									<p className='flex items-center gap-1.5 text-sm text-muted-foreground'>
										<Mail className='size-3.5' /> {task.userEmail}
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				<div className='h-fit space-y-4 lg:sticky lg:top-24'>
					<Card>
						<CardContent className='p-6'>
							<p className='mb-1 text-sm text-muted-foreground'>Budget</p>
							<div className='mb-4 flex items-center gap-1 text-4xl font-bold text-primary'>
								<DollarSign className='size-8' /> {task.budget}
							</div>

							<Button
								className='w-full'
								size='lg'
								onClick={handleBid}
								disabled={placing || bidPlaced || isOwner}
							>
								{placing ? (
									<>
										<Loader2 className='size-4 animate-spin' /> Placing...
									</>
								) : isOwner ? (
									<>
										<Gavel className='size-4' /> Your Task
									</>
								) : bidPlaced ? (
									<>
										<CheckCircle2 className='size-4' /> Bid Placed
									</>
								) : (
									<>
										<Gavel className='size-4' /> Place a Bid
									</>
								)}
							</Button>

							<div className='mt-4 space-y-3 text-sm text-muted-foreground'>
								<p className='flex items-center gap-2'>
									<Briefcase className='size-4 text-primary/70' /> Category:{" "}
									{task.category}
								</p>
								<p className='flex items-center gap-2'>
									<Clock className='size-4 text-primary/70' /> Deadline:{" "}
									{new Date(task.deadline).toLocaleDateString()}
								</p>
								<p className='flex items-center gap-2'>
									<User className='size-4 text-primary/70' /> Posted by:{" "}
									{task.userName}
								</p>
							</div>

							<div className='mt-5 space-y-2 border-t pt-4 text-sm text-muted-foreground'>
								<p className='flex items-center gap-2'>
									<CheckCircle2 className='size-4 text-success' /> Free to bid
								</p>
								<p className='flex items-center gap-2'>
									<CheckCircle2 className='size-4 text-success' /> Direct contact
									with the client
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default TaskDetails;
