import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Meta from "../components/Meta";
import ResponsiveContainer from "../components/ResponsiveContainer";
import SelectionList from "../components/SelectionList";

export default () => (
	<div>
		<Meta />
		<Header />
		<h2>About me</h2>
		<ResponsiveContainer>
			<img src={"images/SaurabhToteyCancun.jpg"} alt={"Saurabh Totey"} style={{width: "100%"}} responsiveWidth="25%" />
			<p responsiveWidth="75%" style={{margin: "10px"}}>Hello! I am Saurabh Totey. I am a human male that is {new Date(new Date() - new Date(2000, 12, 5)).getFullYear() - 1970} years old. I currently live in Boulder, Colorado with my parents and my younger brother. In my free time, I spend a lot of my time trying to learn. My main passions are science and technology, but more specifically, I love learning all sorts of things such as programming, playing the piano, playing the cello, and modelling 3D objects. However, that isn't to say that I don't spend some of my free time doing other activities such as playing videogames or watching television series. I hope one day to make a great change in the world.</p>
		</ResponsiveContainer>
		<br/>
		<h2>Things I like</h2>
		<p>Select a category from the vertical list below to see my favorite things in that category.</p>
		<ResponsiveContainer>
			<SelectionList responsiveWidth="33%" items={["Programming Languages", "TV Shows", "Video Games", "Pokémon", "Subreddits"]} onSelection={i => console.log(i)} />
			<div responsiveWidth="67%" style={{margin: "10px"}}>TODO: a carousel of my favorite things in the selected category will show up (eg. a carousel of my favorite programming languages, or a carousel of my favorite pokemon, etc)</div>
		</ResponsiveContainer>
		<br/>
		<Footer />
	</div>
)
