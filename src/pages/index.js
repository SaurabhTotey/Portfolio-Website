import React from "react";
import Layout from "../components/Layout";
import ResponsiveContainer from "../components/ResponsiveContainer";
import { StaticImage } from "gatsby-plugin-image";

const Index = () => (
	<Layout>
		<h2>About me</h2>
		<ResponsiveContainer responsiveWidths={[2, 10]}>
			<StaticImage
				src={"../../static/images/SaurabhToteyLunchWithFriend.png"}
				alt={"Saurabh Totey"}
				placeholder={"none"}
				backgroundColor={"#454545"}
				style={{ width: "100%" }}
			/>
			<p style={{ margin: "10px" }}>
				Hello! I am a homo sapien named Saurabh Totey. Welcome to my little space on the internet. I use the he/him/his
				pronouns. I am currently studying engineering physics and computer science at the undergraduate level at the
				University of Colorado at Boulder. My main passions are science and technology, but I love learning about all
				sorts of things. My hobbies include programming, playing musical instruments, learning languages, and pushing
				myself at the gym. In my free time, I also enjoy reading, watching television series with overarching stories,
				and playing videogames. I hope one day to make a great change in the world.
			</p>
		</ResponsiveContainer>
	</Layout>
);
export default Index;
