import React from "react";
import Layout from "../components/Layout";
import "../styles/Programming.css";

const Programming = () => (
	<Layout>
		<p>
			Sorry, this page is a work in progress! Right now, this page is just a skeleton for what I will put here.
			Eventually, I will include examples of relevant projects.
		</p>
		<h2>Projects</h2>
		<p>
			<a href={"https://www.github.com/SaurabhTotey"}>My GitHub</a> has the majority of my projects. I will showcase my
			favorite programming projects in this section.
		</p>
		<h2>Skills</h2>
		Below are the skills I feel confident in. I will add examples that demonstrate my proficiency at some point.
		<ul>
			<li>Graphics</li>
			<li>Networking</li>
			<li>Full-Stack</li>
			<li>Simulations</li>
			<li>Scripting</li>
			<li>Scientific Software</li>
			<li>Robotics</li>
			<li>Markup (HTML, LaTeX)</li>
		</ul>
		<h2>Programming Languages</h2>
		<p>
			I enjoy languages that have functional features, but I am also skilled in object-oriented programming. I am
			comfortable combining both styles of programming. I generally try to write declarative code whenever possible
			because well-written declarative code is also more readable.
		</p>
		<p>
			My favorite languages are Rust and Kotlin. I like Rust because, for my use cases, it often allows me to not write
			C/C++ but still provide much of the same functionality and then some. I like Kotlin because it has really nice
			syntactic sugar and shortcuts for common programming tasks, and it just feels really comfortable to use.
		</p>
		<h2 id="setup-title">Setup</h2>
		<h4>Version Control</h4>
		<p>I am extremely familiar with Git. I store most of my projects on GitHub.</p>
		<h4>Editor</h4>
		<p>
			I do most of my programming in NeoVim (with my configurations available{" "}
			<a href="https://github.com/SaurabhTotey/Configs/blob/main/configs/NeoVim/init.vim">here</a>). I have occasionally
			use other editors too, such as Visual Studio Code and other JetBrains IDEs. I mostly use NeoVim because it is free
			and open-source, and so I know that I will be able to use it forever.
		</p>
		<h4>Computer Setup</h4>
		<p>
			I use Arch Linux on my desktop with all my configurations available on{" "}
			<a href="https://www.github.com/SaurabhTotey/Configs">this GitHub repository</a>. I use a Macbook as a commuter
			laptop.
		</p>
		<div id="secret-proverbs" area-hidden={true}>
			<h4>The Text Purity Proverbs</h4>
			<p>The enlightened individual who seeks aesthetics removes trailing whitespace. That is beauty.</p>
			<p>
				The enlightened individual who seeks consistency ensures that every line, including the last line, ends with a
				newline character. That is equality.
			</p>
			<p>
				The enlightened individual who seeks semantic correctness uses tabs for indentation and spaces for alignment.
				That is meaning.
			</p>
		</div>
	</Layout>
);
export default Programming;
