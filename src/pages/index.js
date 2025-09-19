import React from "react";
import Layout from "../components/Layout";
import ResponsiveContainer from "../components/ResponsiveContainer";
import { StaticImage } from "gatsby-plugin-image";
import { Metadata } from "../components/Metadata";

const Index = () => (
	<Layout>
		<h2>About Me</h2>
		<ResponsiveContainer responsiveWidths={[2, 10]} columnGap={"1em"} rowGap={"1em"}>
			<StaticImage
				src={"../../static/images/SaurabhToteyLunchWithFriend.png"}
				alt={"Saurabh Totey"}
				placeholder={"none"}
				backgroundColor={"#454545"}
				style={{ width: "100%" }}
			/>
			<div>
				<p style={{ marginTop: "0" }}>
					Hello! I am a homo sapien named Saurabh Totey. Welcome to my little space on the internet. I use the he/him
					pronouns, and I notate my name as सौरभ तोटे in Devanagari and トテ・ソウラブ in Kana. To pronounce my name, I
					tell people to concatenate the words &ldquo;dinosaur&rdquo; and &ldquo;rub&rdquo; and then remove the
					&ldquo;dino&rdquo; prefix, but if that&apos;s still too difficult, &quot;ST&quot; works too!
				</p>
				<p>
					I find philosophy, math, computer science, and physics to be extremely cool and satisfying, but I also
					generally just love learning about all sorts of things. Being a human, I have a wide variety of hobbies; I
					enjoy programming, playing musical instruments, learning languages, pushing myself at the gym, dancing,
					bouldering, running, and travelling, among many other activities. I also spend time reading, watching
					television series with overarching stories, and playing videogames. I am perpetually aspiring to be my best
					self, and I hope one day to make a great change in the world.
				</p>
				<p>
					I&apos;m not really active on social media, and I figure that a website like this can more faithfully showcase
					who I am. As such, many of these pages are akin to what one may put in a blog. I am *always* open to
					suggestions or ideas, so please do not hesitate to contact me! Unfortunately, the majority of this website is
					still in-progress, but I&apos;ll be trying to continually update it and keep it up to date!
				</p>
			</div>
		</ResponsiveContainer>
	</Layout>
);
export default Index;

export const Head = () => <Metadata />;
