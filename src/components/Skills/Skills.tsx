import { useRef, useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface ISKill {
	name: string;
	description: string;
	icon: string;
	content?: string[];
}

const skills: ISKill[] = [
	{
		name: "HTML",
		description: "Competent at HTML",
		icon: "/images/html.png",
		content: [
			"Use HTML proficiently to create website layouts.",
			"Understanding semantic HTML and designing web pages with semantic elements will give meaning to both the browser and the developer.",
		],
	},
	{
		name: "CSS",
		description: "Proficient in CSS",
		icon: "/images/css.png",
		content: [
			"Apply CSS expertly to style your website.",
			"Understanding the Box Model is essential for web design.",
			"Understanding the BEM (Block, Element, Modifier) standard is important for structuring CSS classes effectively.",
			"Implementing responsive web design ensures optimal viewing experience across various devices.",
			"Designing web pages is easier with a grid system.",
			"Understanding CSS Image Sprites is important for optimizing website performance.",
			"Familiarity with CSS selectors is essential for effectively styling web elements.",
			"Understanding flexbox to a certain extent.",
		],
	},
	{
		name: "Javascript",
		description: "Proficient in Javascript",
		icon: "/images/javascript.png",
		content: [
			"Proficient in JavaScript usage.",
			"Capable of utilizing JavaScript to manipulate the DOM.",
			"Familiar with synchronous and asynchronous concepts in JavaScript.",
			"Competent in utilizing JavaScript libraries like jQuery.",
			"Understanding exception and error handling in JavaScript.",
		],
	},
	{
		name: "ReactJs",
		description: "Proficient in React",
		icon: "/images/react.png",
		content: [
			"Capable of creating single-page applications using React.js.",
			"Capable of optimizing performance in React.js.",
			"Familiar with using React hooks.",
			"Capable of dividing UI into reusable components.",
			"Capable of manipulating the DOM using refs in React.js.",
			"Understanding various component lifecycles.",
		],
	},
	{
		name: "TailwindCSS",
		description: "Competent at TailwindCSS",
		icon: "/images/tailwindcss.png",
		content: [
			"Proficient in utilizing Tailwind CSS for website styling.",
			"Able to customize components, layers, and utilities as needed.",
			"Capable of extracting classes using @apply.",
		],
	},
	{
		name: "Redux",
		description: "Proficient in Redux",
		icon: "/images/redux.svg",
		content: [
			"Familiar with core concepts of Redux including app structure, data flow, and utilizing Redux data.",
			"Proficient in managing a predictable state container with Redux.",
			"Capable of optimizing performance with memoized selector functions created by createSelector.",
		],
	},
	{
		name: "TanStack React Query",
		description: "Proficient in React Query",
		icon: "/images/tanstack-react-query.png",
		content: [
			"Capable of fetching and caching data from a RESTful API.",
			"Proficient in implementing performance optimizations such as pagination and lazy loading data.",
		],
	},
	{
		name: "React Hook Form",
		description: "Competent at React Hook Form",
		icon: "/images/react-hook-form.png",
		content: [
			"Validating forms using React Hook Form.",
			"Handling errors effectively.",
			"Applying schema validation.",
			"Registering components into the hook for validation and submission.",
		],
	},
	{
		name: "Git",
		description: "Proficient in Git",
		icon: "/images/github.png",
	},
];

export default function Skills() {
	const [selectedSkill, setSelectedSkill] = useState<ISKill | null>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	const toggleModal = (skill: ISKill | null) => {
		const isMdScreen = window.matchMedia("(min-width: 1024px)");
		if (skill) {
			document.body.style.overflowY = "hidden";
			document.body.style.height = "100vh";
			if (isMdScreen.matches) {
				document.body.style.paddingRight = "15px";
			}
		} else {
			document.body.style.overflowY = "";
			if (isMdScreen.matches) {
				document.body.style.paddingRight = "";
			}
			document.body.style.height = "";
		}
		setSelectedSkill(skill);
	};
	const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.target instanceof Node && !modalRef.current?.contains(e.target)) {
			toggleModal(null);
		}
	};
	return (
		<Fragment>
			{selectedSkill && (
				<div
					className="fixed inset-0 z-10 bg-gray-300 bg-white/75 p-8"
					onClick={handleClickOutside}>
					<div
						ref={modalRef}
						className="absolute left-[50%] top-[50%] w-[90%] max-w-96 translate-x-[-50%] translate-y-[-50%] overflow-auto rounded border bg-white p-5">
						<div className="flex items-center gap-4">
							<img src={selectedSkill.icon} alt={selectedSkill.icon} className="h-10 w-10" />
							<h6 className="font-[Paprika] font-bold">{selectedSkill.name}</h6>
						</div>
						<br />
						<div className="max-h-[60vh] overflow-auto">
							<ul className="list-disc px-4 font-[Poppins] text-sm">
								{selectedSkill.content?.map((skill, index) => <li key={index}>{skill}</li>)}
							</ul>
						</div>
						<br />
						<div className="flex justify-end">
							<button
								type="button"
								className="rounded-md rounded-br-3xl border-2 border-black px-8 py-2"
								onClick={() => toggleModal(null)}>
								Close
							</button>
						</div>
					</div>
				</div>
			)}
			<section id="skills" className="bg-[rgb(245,249,253)]">
				<div className="mx-auto px-4 py-4 lg:container lg:px-16 lg:py-14">
					<h2 className="font-[Inria] text-3xl font-bold" data-aos="slide-down">
						Skills
					</h2>
					<h4
						className="font-[Paprika] text-3xl uppercase text-gray-400/80 md:text-4xl"
						data-aos="slide-down">
						my top skills
					</h4>
					<br />
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
						{skills.map((element, index) => (
							<div
								key={index}
								data-aos="fade-up"
								data-aos-delay={index * 200}
								className="relative flex w-full max-w-sm cursor-pointer gap-5 rounded-md border-2 bg-white p-5 hover:border-gray-300 [&_img]:hover:scale-125 [&_svg]:hover:stroke-2">
								<div>
									<img
										src={element.icon}
										alt={element.name}
										className="h-10 w-10 transition-transform duration-150"
									/>
								</div>
								<div>
									<h6 className="font-[Paprika] font-bold">{element.name}</h6>
									<p className="italic">{element.description}</p>
									<div
										className="absolute right-2 top-2 flex items-center justify-center p-2"
										onClick={() => toggleModal(element)}>
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
		</Fragment>
	);
}
