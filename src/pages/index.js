import React from "react";
import Layout from "../components/Layout";
import ResponsiveContainer from "../components/ResponsiveContainer";
import { StaticImage } from "gatsby-plugin-image";

const Index = () => (
	<Layout>
		<h2>About Me</h2>
		<ResponsiveContainer responsiveWidths={[2, 10]}>
			<StaticImage
				src={"../../static/images/SaurabhToteyLunchWithFriend.png"}
				alt={"Saurabh Totey"}
				placeholder={"none"}
				backgroundColor={"#454545"}
				style={{ width: "100%" }}
			/>
			<div style={{ margin: "10px" }}>
				<p style={{ marginTop: "0" }}>
					Hello! I am a homo sapien named Saurabh Totey. Welcome to my little space on the internet. I use the he/him
					pronouns, and I notate my name as सौरभ तोटे in Devanagari and トテ・ソウラブ in Kana. I find philosophy, math,
					computer science, and physics to be extremely cool and satisfying, but I also generally just love learning
					about all sorts of things. Being a human, I have a wide variety of hobbies; I enjoy programming, playing
					musical instruments, learning languages, pushing myself at the gym, dancing, bouldering, running, travelling,
					and writing. I also spend time reading, watching television series with overarching stories, and playing
					videogames. I am perpetually aspiring to be my best self, and I hope one day to make a great change in the
					world.
				</p>
				<p>
					The point of this website is to practice showing off a bit. I&apos;m not really active on social media, and I
					figure that a website like this can more faithfully showcase who I am. I am *always* open to suggestions or
					ideas, so please do not hesitate to contact me!
				</p>
			</div>
		</ResponsiveContainer>
	</Layout>
);
export default Index;
