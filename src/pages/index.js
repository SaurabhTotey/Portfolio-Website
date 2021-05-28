import React from "react";
import Layout from "../components/Layout";
import ResponsiveContainer from "../components/ResponsiveContainer";
import { graphql } from "gatsby";
import Img from "gatsby-image";

export const query = graphql`
	query IndexMainImage {
		file(relativePath: { eq: "SaurabhToteyLunchWithFriend.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

const Index = ({ data }) => (
	<Layout>
		<h2>About me</h2>
		<ResponsiveContainer responsiveWidths={[2, 10]}>
			<Img fluid={data.file.childImageSharp.fluid} alt={"Saurabh Totey"} style={{ width: "100%" }} />
			<p style={{ margin: "10px" }}>
				Hello! I am Saurabh Totey. Welcome to my little space on the internet. I am a human male that is{" "}
				{new Date(new Date() - new Date(2000, 11, 5)).getFullYear() - 1970} years old. I use the he/him/his pronouns. I
				am currently studying engineering physics and computer science at the undergraduate level at the University of
				Colorado at Boulder. My main passions are science and technology, but I love learning about all sorts of things
				such as programming, playing the piano, and playing the cello. I am also a videogame enthusiast and I love
				watching television series with overarching stories. I hope one day to make a great change in the world.
			</p>
		</ResponsiveContainer>
	</Layout>
);
export default Index;
