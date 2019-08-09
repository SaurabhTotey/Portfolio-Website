import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ResponsiveContainer from "../components/ResponsiveContainer";

export default () => (
	<div>
		<Header/>
		<p>This page is a work in progress!</p>
		<h2>Timeline (WIP)</h2>
		<canvas />
		<ResponsiveContainer>
			<h2 responsiveWidth="6">Experience</h2>
			<h2 responsiveWidth="6">Education</h2>
		</ResponsiveContainer>
		<ResponsiveContainer>
			<h2 responsiveWidth="6">Interests</h2>
			<h2 responsiveWidth="6">Skills</h2>
		</ResponsiveContainer>
		<ResponsiveContainer>
			<h2 responsiveWidth="6">Leadership</h2>
			<h2 responsiveWidth="6">Volunteering</h2>
		</ResponsiveContainer>
		<Footer/>
	</div>
);
