import { Edit3, Trash2, Eye, Clock, DollarSign, Inbox } from "lucide-react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { tasksUrl } from "../config/api";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const TaskActionsTable = ({ tasks, onDeleted, emptyMessage = "No tasks found." }) => {
	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#b45309",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(tasksUrl(`/${id}`), { method: "DELETE" })
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							onDeleted?.(id);
							Swal.fire({
								title: "Deleted!",
								text: "Your task has been deleted.",
								icon: "success",
							});
						} else {
							Swal.fire({
								title: "Error!",
								text: "Failed to delete task.",
								icon: "error",
							});
						}
					});
			} else {
				toast.error("Task deletion canceled.");
			}
		});
	};

	const handleBids = (task) => {
		toast.info(`Total Bids: ${task?.bidsCount || 0}`);
	};

	if (tasks.length === 0) {
		return (
			<div className='flex flex-col items-center justify-center gap-2 py-14 text-center'>
				<Inbox className='size-10 text-muted-foreground/40' />
				<p className='text-muted-foreground'>{emptyMessage}</p>
			</div>
		);
	}

	return (
		<Card>
			<CardContent className='p-0'>
				<Table>
					<TableHeader>
						<TableRow className='hover:bg-transparent'>
							<TableHead className='pl-6'>#</TableHead>
							<TableHead>Title</TableHead>
							<TableHead>Category</TableHead>
							<TableHead>
								<Clock className='mr-1 inline size-3.5' /> Deadline
							</TableHead>
							<TableHead>
								<DollarSign className='mr-1 inline size-3.5' /> Budget
							</TableHead>
							<TableHead className='pr-6 text-right'>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{tasks.map((task, idx) => (
							<TableRow key={task._id}>
								<TableCell className='pl-6 text-muted-foreground'>
									{idx + 1}
								</TableCell>
								<TableCell className='font-semibold'>{task.title}</TableCell>
								<TableCell>
									<Badge variant='secondary'>{task.category}</Badge>
								</TableCell>
								<TableCell className='text-muted-foreground'>
									{new Date(task.deadline).toLocaleDateString()}
								</TableCell>
								<TableCell className='font-semibold'>${task.budget}</TableCell>
								<TableCell className='pr-6'>
									<div className='flex flex-wrap justify-end gap-1.5'>
										<Button asChild size='sm' variant='outline'>
											<Link to={`/edit-task/${task._id}`}>
												<Edit3 className='size-3.5' /> Update
											</Link>
										</Button>
										<Button
											size='sm'
											variant='outline'
											className='text-destructive hover:text-destructive'
											onClick={() => handleDelete(task._id)}
										>
											<Trash2 className='size-3.5' /> Delete
										</Button>
										<Button size='sm' variant='outline' onClick={() => handleBids(task)}>
											<Eye className='size-3.5' /> Bids
										</Button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
};

export default TaskActionsTable;
