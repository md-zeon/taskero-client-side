import { FaCode, FaPaintBrush, FaPenNib, FaBullhorn, FaKeyboard, FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router";

const categories = [
	{ name: "Web Development", icon: <FaCode /> },
	{ name: "Design", icon: <FaPaintBrush /> },
	{ name: "Writing", icon: <FaPenNib /> },
	{ name: "Marketing", icon: <FaBullhorn /> },
	{ name: "Data Entry", icon: <FaKeyboard /> },
	{ name: "Other", icon: <FaEllipsisH /> },
];

const Categories = () => {
	return (
		<section
			className='py-12'
			data-aos='fade-up'
		>
			<h2 className='text-3xl font-bold text-center text-primary mb-4'>Explore Categories</h2>
			<p className='text-center text-gray-600 max-w-2xl mb-12 mx-auto'>
				Browse all major task categories such as Development, Design, Writing, Marketing, etc by a single click.
			</p>

			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto'>
				{categories.map((cat, idx) => (
					<Link
						to={`/browse-tasks?category=${cat.name}`}
						key={idx}
						className='flex flex-col items-center p-6 bg-base-200 border border-primary rounded-2xl shadow hover:shadow-lg hover:scale-102 transition-all text-center group'
					>
						<div className='text-4xl group-hover:text-primary mb-3'>{cat.icon}</div>
						<p className='font-semibold text-gray-700 group-hover:text-primary'>{cat.name}</p>
					</Link>
				))}
			</div>
		</section>
	);
};

export default Categories;
