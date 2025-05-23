import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router";

const bannerData = [
	{
		image: "https://i.ibb.co/F4ZZyyJp/slide2.png",
		headline: "Post Freelance Tasks Easily",
		text: "Let top freelancers bid on your tasks and get them done faster.",
		ctaText: "Add Your Task",
		ctaLink: "/add-task", // private route
	},
	{
		image: "https://i.ibb.co/fdNKBGps/slide1.png",
		headline: "Build Your Freelance Career",
		text: "Take on tasks, earn ratings, and grow your career with us.",
		ctaText: "Start Earning",
		ctaLink: "/browse-tasks",
	},
	{
		image: "https://i.ibb.co/Y4W2G9ZP/slide3.png",
		headline: "Work From Anywhere",
		text: "Join our global community of remote workers and digital nomads.",
		ctaText: "Join Now",
		ctaLink: "/signup",
	},
	{
		image: "https://i.ibb.co/CKJZxzR4/slide4.png",
		headline: "Develop Your Skills",
		text: "Access projects that challenge you and help you grow professionally.",
		ctaText: "Explore Opportunities",
		ctaLink: "/browse-tasks",
	},
];
const Banner = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay, Keyboard]}
			navigation
			keyboard={{ enabled: true }}
			pagination={{ clickable: true }}
			autoplay={{ delay: 4000 }}
			className='mySwiper rounded-2xl overflow-hidden mt-8 shadow-lg'
			data-aos='fade-up'
		>
			{bannerData.map((slide, idx) => (
				<SwiperSlide key={idx}>
					<div
						className='h-[80vh] w-full bg-cover bg-center relative flex items-center justify-center'
						style={{
							backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${slide.image})`,
						}}
					>
						<div className='text-white text-center px-4 md:px-12 max-w-3xl'>
							<h2 className='text-3xl md:text-5xl font-bold mb-4'>{slide.headline}</h2>
							<p className='text-lg md:text-xl mb-6'>{slide.text}</p>
							<p className='text-xl font-semibold text-primary'>
								<Typewriter
									words={[
										"Post tasks, get them done.",
										"Hire talent you can trust.",
										"Work remotely with ease.",
										"Grow your freelance career.",
										"Connect. Collaborate. Succeed.",
										"Taskero empowers doers.",
									]}
									loop
									cursor
									cursorStyle='|'
									typeSpeed={60}
									deleteSpeed={40}
									delaySpeed={1500}
								/>
							</p>
							<div className='mt-6 flex gap-4 justify-center flex-wrap'>
								<Link
									to={slide.ctaLink}
									className='bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition duration-300'
								>
									{slide.ctaText}
								</Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Banner;
