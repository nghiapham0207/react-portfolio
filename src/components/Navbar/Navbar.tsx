import classNames from "classnames";
import { ReactNode, useState } from "react";

interface INavLink {
	link: string;
	icon: React.SVGProps<SVGSVGElement>;
}

const nav: INavLink[] = [
	{
		link: "#home",
		icon: (
			<svg
				stroke="currentColor"
				fill="none"
				strokeWidth={2}
				viewBox="0 0 24 24"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="h-5 w-5"
				xmlns="http://www.w3.org/2000/svg">
				<desc />
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" />
				<path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" />
			</svg>
		),
	},
	{
		link: "#skills",
		icon: (
			<svg
				stroke="currentColor"
				fill="currentColor"
				strokeWidth={0}
				viewBox="0 0 24 24"
				className="h-5 w-5"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
			</svg>
		),
	},
	{
		link: "#about",
		icon: (
			<svg
				stroke="currentColor"
				fill="currentColor"
				strokeWidth={0}
				viewBox="0 0 24 24"
				className="h-5 w-5"
				xmlns="http://www.w3.org/2000/svg">
				<g>
					<path fill="none" d="M0 0h24v24H0z" />
					<path d="M3.161 4.469a6.5 6.5 0 0 1 8.84-.328 6.5 6.5 0 0 1 9.178 9.154l-7.765 7.79a2 2 0 0 1-2.719.102l-.11-.101-7.764-7.791a6.5 6.5 0 0 1 .34-8.826zm1.414 1.414a4.5 4.5 0 0 0-.146 6.21l.146.154L12 19.672l5.303-5.304-3.535-3.535-1.06 1.06a3 3 0 1 1-4.244-4.242l2.102-2.103a4.501 4.501 0 0 0-5.837.189l-.154.146zm8.486 2.828a1 1 0 0 1 1.414 0l4.242 4.242.708-.706a4.5 4.5 0 0 0-6.211-6.51l-.153.146-3.182 3.182a1 1 0 0 0-.078 1.327l.078.087a1 1 0 0 0 1.327.078l.087-.078 1.768-1.768z" />
				</g>
			</svg>
		),
	},
	{
		link: "#projects",
		icon: (
			<svg
				stroke="currentColor"
				fill="currentColor"
				strokeWidth={0}
				viewBox="0 0 24 24"
				className="h-5 w-5"
				xmlns="http://www.w3.org/2000/svg">
				<g>
					<path fill="none" d="M0 0h24v24H0z" />
					<path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8.126 9H4v7h16v-7h-1.126a4.002 4.002 0 0 1-7.748 0zm0-2a4.002 4.002 0 0 1 7.748 0H20V5H4v5h7.126zM15 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-9 2h2v2H6v-2z" />
				</g>
			</svg>
		),
	},
	{
		link: "#contact",
		icon: (
			<svg
				stroke="currentColor"
				fill="currentColor"
				strokeWidth={0}
				viewBox="0 0 24 24"
				className="h-5 w-5"
				xmlns="http://www.w3.org/2000/svg">
				<path fill="none" d="M0 0h24v24H0V0z" />
				<path d="M20.84 4.22c-.05-.12-.11-.23-.18-.34-.14-.21-.33-.4-.54-.54-.11-.07-.22-.13-.34-.18-.24-.1-.5-.16-.78-.16h-1V1h-2v2H8V1H6v2H5c-.42 0-.8.13-1.12.34-.21.14-.4.33-.54.54-.07.11-.13.22-.18.34-.1.24-.16.5-.16.78v14a2 2 0 002 2h14c.28 0 .54-.06.78-.16.12-.05.23-.11.34-.18.21-.14.4-.33.54-.54.21-.32.34-.71.34-1.12V5c0-.28-.06-.54-.16-.78zM5 19V5h14v14H5zm7-6.12c-2.03 0-6 1.08-6 3.58V18h12v-1.53c0-2.51-3.97-3.59-6-3.59zM8.31 16c.69-.56 2.38-1.12 3.69-1.12s3.01.56 3.69 1.12H8.31zM12 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
			</svg>
		),
	},
];

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false);
	const [active, setActive] = useState(0);
	return (
		<div>
			<div
				className="fixed left-8 top-8 z-50 select-none rounded-lg bg-white/45 p-2"
				onClick={() => setShowMenu(!showMenu)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.8}
					stroke="currentColor"
					className="h-9 w-9 cursor-pointer">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</div>
			<nav
				className={classNames(
					"fixed left-[50%] z-50 translate-x-[-50%] rounded-full bg-slate-200/60 px-4 py-2 backdrop-blur-md transition-[bottom] duration-300",
					{ "bottom-10": showMenu, "bottom-[-50%]": !showMenu },
				)}>
				<div className="flex items-center gap-5">
					{nav.map((element, index) => (
						<a
							key={index}
							href={element.link}
							onClick={() => setActive(index)}
							className={classNames("rounded-full p-3", {
								"bg-cyan-500 text-white": index === active,
							})}>
							{element.icon as ReactNode}
						</a>
					))}
				</div>
			</nav>
		</div>
	);
}
