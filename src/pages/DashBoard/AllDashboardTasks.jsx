import { useMemo, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { Clock, DollarSign, Filter, Search, Inbox } from "lucide-react";
import SiteTitle from "../../components/SiteTitle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const CATEGORIES = [
	"All",
	"Web Development",
	"Design",
	"Writing",
	"Marketing",
	"Data Entry",
	"Other",
];

const AllDashboardTasks = () => {
	const loaderTasks = useLoaderData();
	const tasks = useMemo(() => loaderTasks || [], [loaderTasks]);
	const [category, setCategory] = useState("All");
	const [sortOrder, setSortOrder] = useState("none");

	const filtered = useMemo(() => {
		let result = [...tasks];
		if (category !== "All") {
			result = result.filter((task) => task.category === category);
		}
		if (sortOrder !== "none") {
			result = result.sort((a, b) =>
				sortOrder === "asc" ? a.budget - b.budget : b.budget - a.budget,
			);
		}
		return result;
	}, [tasks, category, sortOrder]);

	return (
		<div className='mx-auto max-w-360 px-4 py-6 my-10'>
			<SiteTitle>All Tasks</SiteTitle>

			<div className='mb-6'>
				<h2 className='mb-1 flex items-center gap-2 text-3xl font-bold tracking-tight'>
					<Search className='size-7 text-primary' /> All Tasks
				</h2>
				<p className='text-muted-foreground'>
					Browse every task posted on the platform.
				</p>
			</div>

			<div className='mb-6 flex flex-col items-start justify-between gap-4 rounded-2xl border bg-card p-4 lg:flex-row lg:items-center'>
				<div className='flex flex-wrap gap-2'>
					{CATEGORIES.map((cat) => (
						<Button
							key={cat}
							size='sm'
							variant={category === cat ? "default" : "outline"}
							onClick={() => setCategory(cat)}
						>
							{cat}
						</Button>
					))}
				</div>
				<div className='flex items-center gap-2'>
					<Label className='flex items-center gap-1.5 text-sm font-medium text-muted-foreground'>
						<Filter className='size-4 text-primary' /> Sort by Budget
					</Label>
					<Select value={sortOrder} onValueChange={setSortOrder}>
						<SelectTrigger className='w-40'>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='none'>No Sort</SelectItem>
							<SelectItem value='asc'>Low to High</SelectItem>
							<SelectItem value='desc'>High to Low</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			<Card>
				<CardContent className='p-0'>
					{filtered.length > 0 ? (
						<Table>
							<TableHeader>
								<TableRow className='hover:bg-transparent'>
									<TableHead>#</TableHead>
									<TableHead>Title</TableHead>
									<TableHead>Category</TableHead>
									<TableHead>Posted By</TableHead>
									<TableHead>
										<Clock className='mr-1 inline size-3.5' /> Deadline
									</TableHead>
									<TableHead>
										<DollarSign className='mr-1 inline size-3.5' /> Budget
									</TableHead>
									<TableHead className='text-right'>Actions</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{filtered.map((task, idx) => (
									<TableRow key={task._id}>
										<TableCell className='text-muted-foreground'>
											{idx + 1}
										</TableCell>
										<TableCell className='font-semibold'>
											{task.title}
										</TableCell>
										<TableCell>
											<Badge variant='secondary'>{task.category}</Badge>
										</TableCell>
										<TableCell className='text-muted-foreground'>
											{task.userName}
										</TableCell>
										<TableCell className='text-muted-foreground'>
											{new Date(task.deadline).toLocaleDateString()}
										</TableCell>
										<TableCell className='font-semibold'>
											${task.budget}
										</TableCell>
										<TableCell className='text-right'>
											<Button asChild size='sm' variant='outline'>
												<Link to={`/task/${task._id}`}>Details</Link>
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					) : (
						<div className='flex flex-col items-center justify-center gap-2 py-12 text-center'>
							<Inbox className='size-10 text-muted-foreground/40' />
							<p className='text-muted-foreground'>
								No tasks found in this category.
							</p>
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
};

export default AllDashboardTasks;
