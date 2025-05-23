import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

const GoBack = () => {
	const navigate = useNavigate();
	return (
		<button
			onClick={() => navigate(-1)}
			className='flex items-center gap-2 text-sm font-medium mb-4 text-white p-1 bg-primary rounded-full cursor-pointer'
		>
			{/* Go Back Button */}
			<FaArrowLeft />
		</button>
	);
};

export default GoBack;
