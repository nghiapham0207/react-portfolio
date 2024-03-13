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
	{
		title: "Stationery Shop",
		image: "/images/demo-stationery.jpg",
		github: "https://github.com/nghiapham0207/react-stationery-fe",
	},
];

export default function Project() {
	return (
		<section id="projects" className="overflow-hidden bg-[rgb(245,249,253)]">
			<div className="min-h-screens container mx-auto flex flex-col px-10 pt-14 xl:justify-start">
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
				<div className="grid grid-cols-1 gap-4 pb-12 drop-shadow-[-5px_10px_10px_rgba(188,213,243,0.9)] md:grid-cols-2 lg:mb-16 lg:grid-cols-3">
					{projects.map((project, index) => (
						<div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
							<div className="rounded-3xl border-b-8 border-[#ece7fa] bg-white p-5 xl:w-[320px]">
								<img
									src={project.image}
									alt={project.title}
									className="h-[175px] w-[280px] rounded-2xl object-cover"
								/>
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
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
