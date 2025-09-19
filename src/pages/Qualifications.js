import React from "react";
import Layout from "../components/Layout";
import { Metadata } from "../components/Metadata";

const Qualifications = () => (
	<Layout>
		<h2>Outdated Résumé and Curriculum Vitae</h2>
		<p>
			I don&apos;t currently have an up-to-date résumé or curriculum vitae. Here is my outdated{" "}
			<a href="/SaurabhToteyResume.pdf">résumé</a> and <a href="/SaurabhToteyCV.pdf">curriculum vitae (CV)</a>. Feel
			free to reach out to me with any questions or other details!
		</p>
		<h2>Academic</h2>
		<p>
			I am currently a{" "}
			<a href="https://engineering.tufts.edu/cs/people/phd-students">
				computer science PhD student at Tufts University
			</a>
			. My broad interest is the exploration of natural physical phenomena through the lens of quantum computation.
		</p>
		<h2>Professional</h2>
		<p>
			I am currently nominally paid to do research. Previously, I have been given money to write code for others and
			also to help mentor/teach others.
		</p>
		<h2>Languages</h2>
		<p>
			I speak okay Spanish and rudimentary French. Some day, I will have more of a grasp on Japanese and Hindi, but that
			day is not today. I love practicing speaking with others, so feel free to reach out!
		</p>
	</Layout>
);
export default Qualifications;

export const Head = () => <Metadata />;
