import React from "react";
import Layout from "../components/Layout";
import "../styles/Programming.css";

const Programming = () => (
	<Layout>
		<h2>Projects</h2>
		<p>
			<a href={"https://www.github.com/SaurabhTotey"}>My GitHub</a> has the majority of my projects, but here are some
			standouts.
		</p>
		<h3>Movie Chooser</h3>
		<p>TODO: description</p>
		<h3>Planetary Conquest</h3>
		<p>TODO: description</p>
		<h2>My Setup</h2>
		<p>TODO: photon (with pics and explanations of choices and name) + nixos + nvim + git</p>
		<h2>Programming Languages</h2>
		<p>TODO: rust, kotlin, and typescript</p>
		<h2 id="philosophy-section-title">Programming Philosophy</h2>
		<div id="all-philosophy-section-content">
			<div id="normal-philosophy-section-content">
				<p>
					TODO: write some sort of intro here explaining that I&apos;m just me, and me is just one guy who has opinions
					that may be wrong.
				</p>
				<h3>Code Is Art</h3>
				<p>TODO: I can talk about this one for a while.</p>
				<h3>User Interfaces Should Be Simple and Usable</h3>
				<p>TODO: don&apos;t forget to mention accessibility!</p>
				<h3>Software Should Be Durable</h3>
				<p>TODO: software should last and work and work well.</p>
				<h3>Size Matters. And So Does Performance</h3>
				<p>TODO: Large programs, large payloads, poor performance, etc. are ugly.</p>
				<h3>Focus On the Contract</h3>
				<p>
					TODO: code is writing promises (not JavaScript ones) with implementations. The contract matters and is
					important to get right first because it is what is harder and more time consuming to change later. This leads
					nicely into the types point.
				</p>
				<h3>Types Are Fun</h3>
				<p>
					TODO: Types make programming much much easier and programming becomes like fitting square shaped cables into
					square shaped holes and triangle shaped cables into triangle shaped holes and so on.
				</p>
				<h3>State Is Complexity</h3>
				<p>TODO: prefer declarative because keeping track of state can be complicated</p>
				<h3>What I Want to Add</h3>
				<p>TODO: I&apos;m not this guy yet, but I want to heavily make use of tests and test-driven development.</p>
			</div>
			<div id="hidden-philosophy-section-content" aria-hidden={true}>
				<h4>The Text Purity Proverbs</h4>
				<p>
					The enlightened individual who seeks consistency ensures that collections separated by delineators &mdash;
					including lines of a file separated by newline characters &mdash; have the delineator after the last item too.
					That is equality.
				</p>
				<p>The enlightened individual who seeks aesthetics removes unnecessary trailing whitespace. That is beauty.</p>
				<p>
					The enlightened individual who seeks semantic correctness uses tabs for indentation and spaces for alignment.
					That is meaning.
				</p>
			</div>
		</div>
	</Layout>
);
export default Programming;
