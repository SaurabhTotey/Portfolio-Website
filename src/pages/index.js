import React from "react";
import Layout from "../components/Layout";
import ResponsiveContainer from "../components/ResponsiveContainer";

export default () => (
	<Layout>
		<h2>About me</h2>
		<ResponsiveContainer responsiveWidths={[3, 9]}>
			<img src={"images/SaurabhToteyCancun.jpg"} alt={"Saurabh Totey"} style={{width: "100%"}} />
			<p style={{margin: "10px"}}>Hello! I am Saurabh Totey. Welcome to my little space on the internet. I am a human male (he/him/his) that is {new Date(new Date() - new Date(2000, 12, 5)).getFullYear() - 1970} years old. I am currently studying physics and computer science at the undergraduate level at the University of Colorado at Boulder. My main passions are science and technology, but I love learning about all sorts of things such as programming, playing the piano, playing the cello, and modelling 3D objects. However, that isn't to say that I don't spend some of my free time doing other activities such as playing videogames or watching television series. I hope one day to make a great change in the world.</p>
		</ResponsiveContainer>
	</Layout>
)
