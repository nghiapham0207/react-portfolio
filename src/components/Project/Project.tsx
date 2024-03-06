// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface IProject {
	title: string;
	image: string;
	github?: string;
	demo?: string;
}

const projects: IProject[] = [
	{
		title: "Shopee Clone",
		image:
			"https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65dc203484952e00080cf347/screenshot_2024-02-26-05-23-43-0000.webp&fit=cover&h=500&w=800",
		github: "https://github.com/nghiapham0207/react-ts-shopee-clone",
		demo: "https://react-ts-shopee-clone.netlify.app/",
	},
	{
		title: "Job Seeker",
		image:
			"https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65b0971e75e3120008f9d0e4/screenshot_2024-01-24-04-51-14-0000.webp&fit=cover&h=500&w=800",
		github: "https://github.com/nghiapham0207/react-job-seeker",
		demo: "https://job-seeker-fe.netlify.app/",
	},
];

export default function Project() {
	return (
		<section id="projects" className="overflow-hidden bg-[rgb(245,249,253)]">
			<div className="container mx-auto flex min-h-screen flex-col justify-between px-10 pt-14 md:gap-56 lg:gap-0 xl:justify-start">
				<div>
					<h1 className="font-[Inria] text-3xl font-semibold" data-aos="fade-down">
						Projects
					</h1>
					<h4
						className="font-[Paprika] text-4xl uppercase leading-relaxed text-gray-400"
						data-aos="fade-down">
						my creation
					</h4>
					<br />
				</div>
				<div className="flex flex-col-reverse items-center gap-5 lg:flex-row">
					<img
						data-aos="fade-right"
						src="https://codeaprogram-portfolio.web.app/assets/person.3319b995.png"
						alt=""
						className="w-full md:min-w-[16rem] md:max-w-[35vw]"
					/>
					<Swiper
						slidesPerView={1}
						spaceBetween={20}
						modules={[Pagination]}
						pagination={{ clickable: true }}
						data-aos="fade-left"
						className="h-fit w-full pb-12 drop-shadow-[-5px_35px_35px_rgba(223,229,236,0.9)] md:max-w-xs lg:mb-16">
						{projects.map((project, index) => (
							<SwiperSlide key={index}>
								<div className="rounded-3xl border-b-8 border-[#ece7fa] bg-white p-5 md:w-[320px]">
									<img src={project.image} alt={project.title} className="rounded-2xl" />
									<div className="mt-2 flex flex-col gap-1">
										<h5 className="font-bold">{project.title}</h5>
										<div className="flex gap-5 font-semibold text-cyan-400">
											{project.github && (
												<a href={project.github} target="_blank">
													Github
												</a>
											)}
											{project.demo && (
												<a href={project.demo} target="_blank">
													Demo
												</a>
											)}
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
