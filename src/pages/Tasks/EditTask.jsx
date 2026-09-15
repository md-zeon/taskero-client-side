import { useState, use } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { Pencil, DollarSign, CalendarDays, User, Mail, ShieldAlert, Loader2 } from "lucide-react";
import GoBack from "../../components/GoBack";
import AuthContext from "../../context/AuthContext";
import SEO from "../../components/SEO";
import Loader from "../../components/Loader";
import { tasksUrl } from "../../config/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const CATEGORIES = [
	"Web Development",
	"Design",
	"Writing",
	"Marketing",
	"Data Entry",
	"Other",
];

const EditTask = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const task = useLoaderData();
	const { user, loading: authLoading } = use(AuthContext);
	const [updating, setUpdating] = useState(false);

	const [form, setForm] = useState({
		title: task.title,
		category: task.category,
		description: task.description,
		deadline: task.deadline,
		budget: task.budget,
	});

	const setField = (key) => (value) => setForm((f) => ({ ...f, [key]: value }));

	if (authLoading) return <Loader />;

	if (task.userEmail !== user?.email) {
		return (
			<div className='flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center px-4 text-center'>
				<div className='mb-4 grid size-16 place-items-center rounded-2xl bg-destructive/10 text-destructive'>
					<ShieldAlert className='size-8' />
				</div>
				<h1 className='mb-2 text-2xl font-bold'>
					You are not authorized to edit this task.
				</h1>
				<p className='mb-6 text-muted-foreground'>
					You can only edit tasks that you have posted.
				</p>
				<Button onClick={() => navigate("/my-posted-tasks")}>Go Back</Button>
			</div>
		);
	}

	const handleUpdate = (e) => {
		e.preventDefault();

		const budget = parseFloat(form.budget);
		if (budget < 0) {
			toast.error("Budget Can't be Negative!");
			return;
		}
		if (budget === 0) {
			toast.error("Budget Can't be Zero!");
			return;
		}

		const updatedTask = {
			title: form.title,
			category: form.category,
			description: form.description,
			deadline: form.deadline,
			budget,
		};

		setUpdating(true);
		fetch(tasksUrl(`/${id}`), {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updatedTask),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					toast.success("Task updated successfully!");
					navigate("/my-posted-tasks");
				} else {
					toast.info("No changes were made.");
				}
			})
			.catch((err) => console.error(err))
			.finally(() => setUpdating(false));
	};

	return (
		<div className='mx-auto max-w-3xl px-4 py-12'>
			<SEO title='Update Task'
				description='Update the details of your posted freelance task on Taskero.'
			/>
			<GoBack />
			<Card>
				<CardHeader className='text-center'>
					<CardTitle className='flex items-center justify-center gap-2 text-2xl'>
						<Pencil className='size-6 text-primary' /> Update Task
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleUpdate} className='grid grid-cols-1 gap-5'>
						<div className='grid gap-2'>
							<Label htmlFor='title'>Title</Label>
							<Input
								id='title'
								value={form.title}
								onChange={(e) => setField("title")(e.target.value)}
								placeholder='Enter task title'
								required
							/>
						</div>

						<div className='grid gap-2'>
							<Label>Category</Label>
							<Select value={form.category} onValueChange={setField("category")}>
								<SelectTrigger className='w-full'>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									{CATEGORIES.map((cat) => (
										<SelectItem key={cat} value={cat}>
											{cat}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						<div className='grid gap-2'>
							<Label htmlFor='description'>Description</Label>
							<Textarea
								id='description'
								value={form.description}
								onChange={(e) => setField("description")(e.target.value)}
								placeholder='Enter task description'
								rows={4}
								required
							/>
						</div>

						<div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
							<div className='grid gap-2'>
								<Label htmlFor='deadline' className='flex items-center gap-2'>
									<CalendarDays className='size-4 text-primary' /> Deadline
								</Label>
								<Input
									id='deadline'
									type='date'
									value={form.deadline}
									onChange={(e) => setField("deadline")(e.target.value)}
									required
								/>
							</div>

							<div className='grid gap-2'>
								<Label htmlFor='budget' className='flex items-center gap-2'>
									<DollarSign className='size-4 text-primary' /> Budget (USD)
								</Label>
								<Input
									id='budget'
									type='number'
									min={0}
									value={form.budget}
									onChange={(e) => setField("budget")(e.target.value)}
									placeholder='Enter budget'
									required
								/>
							</div>
						</div>

						<Separator />

						<div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
							<div className='grid gap-2'>
								<Label className='flex items-center gap-2'>
									<User className='size-4 text-primary' /> Name
								</Label>
								<Input value={user?.displayName || ""} readOnly className='bg-muted' />
							</div>
							<div className='grid gap-2'>
								<Label className='flex items-center gap-2'>
									<Mail className='size-4 text-primary' /> Email
								</Label>
								<Input value={user?.email || ""} readOnly className='bg-muted' />
							</div>
						</div>

						<Button type='submit' size='lg' disabled={updating}>
							{updating && <Loader2 className='size-4 animate-spin' />}
							Update Task
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default EditTask;
