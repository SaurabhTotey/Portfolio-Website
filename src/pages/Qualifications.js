import React from "react";
import Layout from "../components/Layout";

const Qualifications = () => (
	<Layout>
		<h2>Résumé</h2>
		<p>
			My résumé is available <a href="../Resume.pdf">here</a>. It is a PDF compiled with LaTeX. Feel free to reach out
			to me with any questions or other details!
		</p>
		<h2>Programming</h2>
		<p>
			I love programming! The only limits of software are those imposed by hardware, math, and, the developer&apos;s
			imagination.
		</p>
		<p>
			I host most of my projects on <a href="https://www.github.com/SaurabhTotey">GitHub</a>. I have developed a variety
			of different applications. I have experience with game development, full-stack, simulations, scripting, scientific
			software, and robotics.
		</p>
		<p>
			I am currently employed at <a href="https://phet.colorado.edu">PhET Simulations</a>, where I program educational
			scientific simulations with JavaScript.
		</p>
		<h2>Physics</h2>
		<p>
			I think physics is really cool because it is a science dealing with the fundamental realities of the universe.
		</p>
		<p>
			I am currently working under Dr. Stringfellow for various programming assignments dealing with the{" "}
			<a href="https://www.sdss.org/">Sloan Digital Sky Survey 4</a> astronomical data.
		</p>
	</Layout>
);
export default Qualifications;
