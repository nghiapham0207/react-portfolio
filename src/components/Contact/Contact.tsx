import { FormEvent, Fragment, useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import classNames from "classnames";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface IToast {
	message: string;
	type?: "success" | "error";
	handleClose: () => void;
}

const ToastMessage = ({ message, type = "success", handleClose = () => null }: IToast) => {
	return (
		<div
			className={classNames(
				"fixed left-1/2 top-5 mb-2 block w-full max-w-xs translate-x-[-50%] rounded-md border bg-white p-4 opacity-100 shadow transition-all duration-300",
				{ "hidden opacity-0": !message, "block opacity-100": message },
			)}>
			<div className="flex items-center gap-2">
				<span
					className={classNames({
						"text-green-500": type === "success",
						"text-red-400": type === "error",
					})}>
					{type === "success" && (
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
								d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					)}
					{type === "error" && (
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
								d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
							/>
						</svg>
					)}
				</span>
				<p className="flex-1 truncate" title={message}>
					{message}
				</p>
				<button type="button" className="ms-auto text-gray-400" onClick={handleClose}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-6 w-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default function Contact() {
	const formRef = useRef<HTMLFormElement>(null);
	const [state, setState] = useState<Omit<IToast, "handleClose">>({
		message: "",
		type: "success",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSendMail = async (e: FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		try {
			const res = await emailjs.sendForm(serviceId, templateId, formRef.current!, {
				publicKey,
			});
			const OK = 200;
			if (res.status === OK) {
				// toast and reset form
				setState({ message: "Send Successfully!", type: "success" });
			}
		} catch (error) {
			// toast error.text
			setState({ message: (error as EmailJSResponseStatus).text, type: "error" });
		} finally {
			setIsSubmitting(false);
			setTimeout(() => {
				setState({ message: "" });
			}, 3000);
		}
	};
	return (
		<Fragment>
			<ToastMessage
				message={state.message}
				type={state.type}
				handleClose={() => setState({ message: "" })}
			/>
			<section id="contact">
				<div className="container mx-auto px-10 py-14">
					<h2 className="text-3xl font-bold capitalize">
						contact <span className="text-cyan-400">me</span>
					</h2>
					<h4 className="font-[Paprika] text-4xl uppercase leading-relaxed">get in touch</h4>
					<br />
					<div className="flex flex-col-reverse gap-10 rounded-lg bg-[rgb(245,249,253)] p-4 md:flex-row">
						<form ref={formRef} onSubmit={handleSendMail} className="flex grow flex-col gap-4">
							<input
								type="email"
								name="from_email"
								required
								id=""
								placeholder="Your Email Address"
								className="rounded border p-2 focus:outline-cyan-300"
							/>
							<input
								type="text"
								name="from_name"
								required
								id=""
								placeholder="Your Name"
								className="rounded border p-2 focus:outline-cyan-300"
							/>
							<textarea
								name="message"
								required
								id=""
								cols={30}
								rows={6}
								placeholder="Your Message"
								className="rounded border p-2 focus:outline-cyan-300"></textarea>
							<button
								type="submit"
								disabled={isSubmitting}
								className="w-fit rounded-full bg-cyan-300 px-4 py-3 font-bold capitalize text-white">
								submit message
							</button>
						</form>
						<div className="flex grow flex-col gap-2">
							<div className="flex gap-2">
								<span>
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
											d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
										/>
									</svg>
								</span>
								<a
									href="mailto:nghiapham02072001@gmail.com"
									className="truncate"
									title={"nghiapham02072001@gmail.com"}>
									nghiapham02072001@gmail.com
								</a>
							</div>
							<div className="flex gap-2">
								<span>
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
											d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
										/>
									</svg>
								</span>
								<a href="tel:+84334569493">(+84) 334569493</a>
							</div>
							<div className="flex gap-2">
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="gray"
										strokeWidth={1.5}
										stroke="currentColor"
										viewBox="0 0 512 512">
										<title>Logo Facebook</title>
										<path
											d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
											fillRule="evenodd"
										/>
									</svg>
								</span>
								<a href="https://www.facebook.com/profile.php?id=100062194905185" target="_blank">
									facebook
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
}
