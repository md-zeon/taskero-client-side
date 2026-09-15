import { useState, use } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { ClipboardList, DollarSign, CalendarDays, User, Mail, Loader2 } from "lucide-react";
import AuthContext from "../../context/AuthContext";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";
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

const AddTask = () => {
	const { user } = use(AuthContext);
	const navigate = useNavigate();
	const [submitting, setSubmitting] = useState(false);

	const [form, setForm] = useState({
		title: "",
		category: "",
		description: "",
		deadline: "",
		budget: "",
	});

	const setField = (key) => (value) => setForm((f) => ({ ...f, [key]: value }));

	const handleSubmit = (e) => {
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

		const newTask = {
			title: form.title,
			category: form.category,
			description: form.description,
			deadline: form.deadline,
			budget,
			userEmail: user?.email,
			userName: user?.displayName,
		};

		setSubmitting(true);
		fetch(tasksUrl(), {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(newTask),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					toast.success("Task added successfully!");
					navigate("/my-posted-tasks");
					setForm({ title: "", category: "", description: "", deadline: "", budget: "" });
				}
			})
			.catch((err) => {
				console.error(err);
				toast.error("Failed to add task.");
			})
			.finally(() => setSubmitting(false));
	};

	return (
		<div className='mx-auto max-w-3xl px-4 py-12'>
			<SEO title='Add Task'
				description='Post a new freelance task on Taskero with a description, category, budget, and deadline.'
			/>
			<Reveal>
				<Card>
					<CardHeader className='text-center'>
						<CardTitle className='flex items-center justify-center gap-2 text-2xl'>
							<ClipboardList className='size-6 text-primary' /> Add a New Task
						</CardTitle>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5'>
							<div className='grid gap-2'>
								<Label htmlFor='title'>Task Title</Label>
								<Input
									id='title'
									value={form.title}
									onChange={(e) => setField("title")(e.target.value)}
									placeholder='Task Title'
									required
								/>
							</div>

							<div className='grid gap-2'>
								<Label>Category</Label>
								<Select
									value={form.category}
									onValueChange={setField("category")}
									required
								>
									<SelectTrigger className='w-full'>
										<SelectValue placeholder='Select Category' />
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
								<Label htmlFor='description'>Task Description</Label>
								<Textarea
									id='description'
									value={form.description}
									onChange={(e) => setField("description")(e.target.value)}
									placeholder='Task Description'
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
										placeholder='Budget (USD)'
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

							<Button type='submit' size='lg' disabled={submitting}>
								{submitting && <Loader2 className='size-4 animate-spin' />}
								Submit Task
							</Button>
						</form>
					</CardContent>
				</Card>
			</Reveal>
		</div>
	);
};

export default AddTask;
