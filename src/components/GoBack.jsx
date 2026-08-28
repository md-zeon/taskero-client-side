import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

const GoBack = () => {
	const navigate = useNavigate();
	return (
		<Button variant='ghost' size='sm' onClick={() => navigate(-1)} className='mb-4'>
			<ArrowLeft className='size-4' /> Go Back
		</Button>
	);
};

export default GoBack;
