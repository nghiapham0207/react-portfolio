export default function Hero() {
	return (
		<section id="home" className="flex min-h-screen items-center">
			<div className="flex flex-1 items-center justify-center">
				<img
					src="https://johnalexportfolio.netlify.app/assets/hero.a707d92d.png"
					alt=""
					className="w-1/2"
				/>
			</div>
			<div className="flex flex-1 flex-col">
				<div className="">
					<h1 className="text-4xl font-bold leading-normal text-black">
						<span className="text-5xl text-cyan-500">
							Hello!
							<br />
						</span>
						{"My name is "}
						<span>Pham Hong Nghia</span>
					</h1>
					<h4 className="mt-4">Fresher Frontend Developer</h4>
					<a
						href="#contact"
						className="mt-4 inline-block rounded-full bg-cyan-400 p-4 font-bold capitalize text-white">
						contact me
					</a>
					<div className="mt-4 flex gap-5">
						<div className="cursor-pointer text-gray-200 hover:text-gray-300">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8"
								fill="currentColor"
								stroke="currentColor"
								viewBox="0 0 512 512">
								<title>Logo Facebook</title>
								<path
									d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
									fillRule="evenodd"
								/>
							</svg>
						</div>
						<div className="cursor-pointer text-gray-200 hover:text-gray-300">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8"
								fill="currentColor"
								stroke="currentColor"
								viewBox="0 0 512 512">
								<title>Logo Linkedin</title>
								<path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}