import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Meta from "../components/Meta";
import ResponsiveContainer from "../components/ResponsiveContainer";

export default () => (
	<div>
		<Meta />
		<Header />
		<h2>About me</h2>
		<ResponsiveContainer>
			<img src={"images/SaurabhToteyCancun.jpg"} alt={"Saurabh Totey"} style={{width: "100%"}} responsiveWidth="25%" />
			<p responsiveWidth="75%" style={{margin: "10px"}}>Hello! I am Saurabh Totey. I am an 18 year-old male with a strong passion for science and technology. I currently live in Boulder, Colorado with my parents and my younger brother. In my free time, I spend a lot of my time trying to learn. I love learning all sorts of things such as programming, playing the piano, playing the cello, and modelling 3D objects. However, that isn't to say that I don't spend some of my free time doing other activities such as playing videogames or watching television series. I hope one day to make a great change in the world.</p>
		</ResponsiveContainer>
		<br/>
		<h2>Things I like</h2>
		<ResponsiveContainer>
			<div responsiveWidth="33%">TODO: a vertical list of my interest categories will show up here (eg. programming languages, pokemon, etc)</div>
			<div responsiveWidth="67%">TODO: a carousel of my favorite things in the selected category will show up (eg. a carousel of my favorite programming languages, or a carousel of my favorite pokemon, etc)</div>
		</ResponsiveContainer>
		<br/>
		<Footer />
	</div>
)
