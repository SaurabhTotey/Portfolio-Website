import React from "react";
import Layout from "../components/Layout";
import ResponsiveContainer from "../components/ResponsiveContainer";
import { StaticImage } from "gatsby-plugin-image";

const Index = () => (
	<Layout>
		<h2>About me</h2>
		<ResponsiveContainer responsiveWidths={[3, 9]}>
			<StaticImage
				src={"../../static/images/SaurabhToteyLunchWithFriend.png"}
				alt={"Saurabh Totey"}
				placeholder={"none"}
				backgroundColor={"#454545"}
				style={{ width: "100%" }}
			/>
			<p style={{ margin: "10px" }}>
				Hello! I am Saurabh Totey. Welcome to my little space on the internet. I am a homo sapien. I use the he/him/his
				pronouns. I am currently studying engineering physics and computer science at the undergraduate level at the
				University of Colorado at Boulder. My main passions are science and technology, but I love learning about all
				sorts of things such as programming, playing the piano, and playing the cello. I am also a videogame enthusiast
				and I love watching television series with overarching stories. My other hobbies include learning languages and
				going to the gym. I hope one day to make a great change in the world.
			</p>
		</ResponsiveContainer>
	</Layout>
);
export default Index;
