import { useState, use } from "react";
import { useNavigate } from "react-router";
import { User, Mail, Image, Save, Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";
import SEO from "../../components/SEO";
import GoBack from "../../components/GoBack";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EditProfile = () => {
	const { user, updateUserProfile } = use(AuthContext);
	const navigate = useNavigate();
	const [saving, setSaving] = useState(false);

	const [form, setForm] = useState({
		name: user?.displayName || "",
		photoURL: user?.photoURL || "",
	});

	const handleUpdate = (e) => {
		e.preventDefault();
		setSaving(true);
		updateUserProfile(form.name, form.photoURL)
			.then(() => {
				toast.success("Profile updated successfully!");
				navigate("/dashboard");
			})
			.catch((err) => {
				toast.error(err.message);
			})
			.finally(() => setSaving(false));
	};

	const initials = (form.name || "?")
		.split(" ")
		.map((n) => n[0])
		.slice(0, 2)
		.join("")
		.toUpperCase();

	return (
		<div className='mx-auto max-w-md px-4 py-10'>
			<SEO title='Edit Profile'
				description='Update your Taskero profile, display name, and photo.'
			/>
			<GoBack />

			<Card>
				<CardHeader className='items-center'>
					<div className='mb-2 ring-2 ring-primary/30 ring-offset-2 ring-offset-background rounded-full'>
						<Avatar className='size-24'>
							<AvatarImage src={form.photoURL} alt='Profile' />
							<AvatarFallback className='text-xl'>{initials}</AvatarFallback>
						</Avatar>
					</div>
					<CardTitle className='flex items-center justify-center gap-2 text-2xl'>
						<User className='size-5 text-primary' /> Edit Profile
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleUpdate} className='space-y-4'>
						<div className='grid gap-2'>
							<Label htmlFor='name' className='flex items-center gap-2'>
								<User className='size-4 text-primary' /> Full Name
							</Label>
							<Input
								id='name'
								value={form.name}
								onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
								placeholder='Your Name'
								required
							/>
						</div>

						<div className='grid gap-2'>
							<Label className='flex items-center gap-2'>
								<Mail className='size-4 text-primary' /> Email
							</Label>
							<Input value={user?.email || ""} readOnly className='bg-muted' />
						</div>

						<div className='grid gap-2'>
							<Label htmlFor='photoURL' className='flex items-center gap-2'>
								<Image className='size-4 text-primary' /> Profile Photo URL
							</Label>
							<Input
								id='photoURL'
								value={form.photoURL}
								onChange={(e) =>
									setForm((f) => ({ ...f, photoURL: e.target.value }))
								}
								placeholder='Profile Photo URL'
							/>
						</div>

						<Button type='submit' className='w-full' size='lg' disabled={saving}>
							{saving ? (
								<Loader2 className='size-4 animate-spin' />
							) : (
								<Save className='size-4' />
							)}
							Save Changes
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default EditProfile;
