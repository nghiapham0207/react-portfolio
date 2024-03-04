export default function About() {
	return (
		<section id="about">
			<div className="container mx-auto max-w-6xl px-16 py-14">
				<div className="text-center">
					<h3 className="text-3xl">
						About <span className="text-cyan-400">Me</span>
					</h3>
					<p className="mt-2 text-xl capitalize text-gray-400">my introduction</p>
				</div>
				<div className="mt-2 flex items-center gap-12">
					<div className="flex flex-col items-start justify-center">
						<h5 className="text-gray-600">
							Hello! I am Pham Hong Nghia, an undergraduate student majoring in Software Engineering
							at the Posts and Telecommunications Institute of Technology.
							<br />
							Throughout my academic journey, I have extensive knowledge about HTML, CSS, SCSS,
							JavaScript, ReactJs as well as software development, project management, and
							problem-solving.
							<br />
							Building upon these knowledge and skills, I am seeking an internship or job
							opportunity to apply what I have learned and further enhance my practical experience.
							<br />
							This portfolio website is created to introduce myself, showcase the projects I have
							worked on, and highlight the skills I have developed.
							<br />I hope you find the information provided useful and engaging. Thank you for
							taking the time to visit!
						</h5>
						{/* experience */}
						{/* Download CV Button */}
						<a
							href="https://www.canva.com/design/DAF-aqU_lvU/cBD22hjo9kW2vsPDX84B7g/edit?utm_content=DAF-aqU_lvU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
							target="_blank"
							className="mt-5 rounded-full bg-cyan-400 px-5 py-3 font-bold text-white">
							Download CV
						</a>
					</div>
					<div className="relative rounded-xl bg-cyan-200">
						<img
							src="https://johnalexportfolio.netlify.app/assets/about.34cb49a4.png"
							alt=""
							className="h-full w-72 max-w-sm"
						/>
						<div className="absolute inset-0 z-[-1] rotate-12 rounded-xl bg-gray-200"></div>
					</div>
				</div>
			</div>
		</section>
	);
}