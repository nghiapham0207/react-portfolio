interface ISKill {
	name: string;
	description: string;
	icon: string;
}

const skills: ISKill[] = [
	{ name: "HTML", description: "Competent at HTML", icon: "/images/html.png" },
	{ name: "CSS", description: "Proficient in CSS", icon: "/images/css.png" },
	{ name: "Javascript", description: "Proficient in Javascript", icon: "/images/javascript.png" },
	{ name: "ReactJs", description: "Proficient in React", icon: "/images/react.png" },
	{
		name: "TailwindCSS",
		description: "Competent at TailwindCSS",
		icon: "/images/tailwindcss.png",
	},
	{ name: "Redux", description: "Proficient in Redux", icon: "/images/redux.svg" },
	{
		name: "TanStack React Query",
		description: "Proficient in React Query",
		icon: "/images/tanstack-react-query.png",
	},
	{
		name: "React Hook Form",
		description: "Competent at React Hook Form",
		icon: "/images/react-hook-form.png",
	},
];

export default function Skills() {
	return (
		<section id="skills" className="bg-[rgb(245,249,253)]">
			<div className="container mx-auto px-16 py-14">
				<h2 className="font-[Inria] text-3xl font-bold">Skills</h2>
				<h4 className="font-[Paprika] text-4xl uppercase text-gray-400/80">my top skills</h4>
				<br />
				<div className="flex flex-wrap justify-center gap-4">
					{skills.map((element, index) => (
						<div
							key={index}
							className="relative flex w-full max-w-sm cursor-pointer gap-5 rounded-md border-2 bg-white p-5 hover:border-gray-300 [&_img]:hover:scale-125">
							<div>
								<img src={element.icon} alt={element.name} className="h-10 w-10" />
							</div>
							<div>
								<h6 className="font-[Paprika] font-bold">{element.name}</h6>
								<p className="italic">{element.description}</p>
								<div className="absolute right-3 top-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="h-6 w-6">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
										/>
									</svg>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
