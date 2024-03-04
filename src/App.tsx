import { Fragment } from "react/jsx-runtime";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
	return (
		<Fragment>
			<Navbar />
			<div>
				<Hero />
				<Skills />
				<About />
				<Project />
				<Contact />
				<Footer />
			</div>
		</Fragment>
	);
}

export default App;
