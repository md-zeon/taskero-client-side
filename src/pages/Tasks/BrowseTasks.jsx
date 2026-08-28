import { useEffect, useMemo, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router";
import { Search, Filter, FolderSearch } from "lucide-react";
import SEO from "../../components/SEO";
import TaskCard from "../../components/TaskCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const CATEGORIES = [
	"All",
	"Web Development",
	"Design",
	"Writing",
	"Marketing",
	"Data Entry",
	"Other",
];

const BrowseTasks = () => {
	const loaderTasks = useLoaderData();
	const tasks = useMemo(() => loaderTasks || [], [loaderTasks]);
	const [searchParams] = useSearchParams();
	const categoryFromURL = searchParams.get("category");

	const [category, setCategory] = useState(
		CATEGORIES.includes(categoryFromURL) ? categoryFromURL : "All",
	);
	const [sortOrder, setSortOrder] = useState("none");
	const [search, setSearch] = useState("");

	useEffect(() => {
		if (CATEGORIES.includes(categoryFromURL)) {
			setCategory(categoryFromURL);
		}
	}, [categoryFromURL]);

	const filtered = useMemo(() => {
		let result = [...tasks];

		if (category !== "All") {
			result = result.filter((task) => task.category === category);
		}

		if (search.trim()) {
			const q = search.trim().toLowerCase();
			result = result.filter(
				(task) =>
					task.title?.toLowerCase().includes(q) ||
					task.description?.toLowerCase().includes(q) ||
					task.category?.toLowerCase().includes(q),
			);
		}

		if (sortOrder !== "none") {
			result = result.sort((a, b) =>
				sortOrder === "asc" ? a.budget - b.budget : b.budget - a.budget,
			);
		}

		return result;
	}, [tasks, category, sortOrder, search]);

	const categoryCounts = useMemo(() => {
		const counts = { All: tasks.length };
		CATEGORIES.filter((c) => c !== "All").forEach((cat) => {
			counts[cat] = tasks.filter((t) => t.category === cat).length;
		});
		return counts;
	}, [tasks]);

	return (
		<div className='mx-auto max-w-360 px-4 py-10'>
			<SEO title='Browse Tasks'
				description='Browse open freelance tasks on Taskero, search by keyword, and filter by category, budget, and deadline.'
			/>

			<div className='mb-8 text-center'>
				<h1 className='mb-3 text-3xl font-bold tracking-tight md:text-4xl'>
					Browse Freelance Tasks
				</h1>
				<p className='mx-auto max-w-xl text-muted-foreground'>
					Find your next opportunity. Search, filter by category, and sort by
					budget.
				</p>
			</div>

			<div className='relative mx-auto mb-6 max-w-2xl'>
				<Search className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground/60' />
				<Input
					type='text'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder='Search by title, description or category...'
					className='pl-9'
				/>
			</div>

			<div className='mb-6 flex flex-wrap justify-center gap-2'>
				{CATEGORIES.map((cat) => (
					<Button
						key={cat}
						size='sm'
						variant={category === cat ? "default" : "outline"}
						onClick={() => setCategory(cat)}
					>
						{cat}
						<span className='text-xs opacity-70'> ({categoryCounts[cat] || 0})</span>
					</Button>
				))}
			</div>

			<div className='mb-8 flex flex-col items-center justify-between gap-3 sm:flex-row'>
				<p className='text-sm text-muted-foreground'>
					Showing{" "}
					<span className='font-semibold text-foreground'>
						{filtered.length}
					</span>{" "}
					task{filtered.length !== 1 ? "s" : ""}
					{category !== "All" ? ` in ${category}` : ""}
				</p>
				<div className='flex items-center gap-2'>
					<Label className='flex items-center gap-1.5 text-sm font-medium text-muted-foreground'>
						<Filter className='size-4 text-primary' /> Sort by Budget
					</Label>
					<Select value={sortOrder} onValueChange={setSortOrder}>
						<SelectTrigger className='w-40'>
							<SelectValue placeholder='No Sort' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='none'>No Sort</SelectItem>
							<SelectItem value='asc'>Low to High</SelectItem>
							<SelectItem value='desc'>High to Low</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			{filtered.length > 0 ? (
				<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					{filtered.map((task, idx) => (
						<TaskCard key={task._id} task={task} index={idx} />
					))}
				</div>
			) : (
				<div className='py-16 text-center'>
					<FolderSearch className='mx-auto mb-4 size-12 text-muted-foreground/30' />
					<h3 className='mb-2 text-xl font-semibold'>No tasks found</h3>
					<p className='mx-auto mb-6 max-w-sm text-muted-foreground'>
						Try adjusting your search or filters, or clear them to browse all
						tasks.
					</p>
					<Button
						variant='outline'
						onClick={() => {
							setSearch("");
							setCategory("All");
							setSortOrder("none");
						}}
					>
						Clear All Filters
					</Button>
				</div>
			)}
		</div>
	);
};

export default BrowseTasks;
