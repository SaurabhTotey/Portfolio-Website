import React from "react";
import Carousel from "../components/Carousel"
import Footer from "../components/Footer";
import Header from "../components/Header";
import Meta from "../components/Meta";
import ResponsiveContainer from "../components/ResponsiveContainer";
import SelectionList from "../components/SelectionList";

const carousels = {
	"Programming Languages": <Carousel title={"Programming Languages"} description={"I write code mostly as a hobby. As such, I use a lot of programming languages. I really like languages that have object oriented features, functional features, and metaprogramming. I think that the value of a language should be deemed not only on what can be made with the language, but also with how hard it is to make mistakes when writing code with that language."}>
		<div>
			<h4>Kotlin</h4>
			<img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin-logo.svg/220px-Kotlin-logo.svg.png"} alt={"Kotlin"} height={"100"} />
			<p style={{fontSize: "80%"}}>Kotlin is by far my favorite programming language. Kotlin boasts easy-to-use functional programming, great support for object oriented, and overall general ease of use. Pair this with its great cross-platform capabilities and easy integration with existing Java code, and you are left with no reason not to use Kotlin. It is very clear that Kotlin was made by people who write code, and I am really upset writing projects in languages that aren't Kotlin. The only thing I wish Kotlin had is metaprogramming.</p>
		</div>
	</Carousel>,
	"TV Shows": <Carousel title={"TV Shows"} description={"I watch a lot of television during my free time. I really enjoy shows that build believable worlds and characters. I am completely fine suspending my disbelief for the premise of a show, but I want to see how a show would take an interesting premise and develop it into a fascinating story with an interesting plot."}>
		<p>Items are a WIP 1</p>
		<p>Items are a WIP 2</p>
		<p>Items are a WIP 3</p>
	</Carousel>,
	"Video Games": <Carousel title={"Video Games"} description={"There is nothing more satisfying than playing video games. The feeling of accomplishment I get after finishing some endeavor makes me feel unimaginably satisfied. I like videogames that either are imaginative and force me to think outside the box, give me a sense of exploration, or have an interesting story. My love for overcoming challenges has probably caused me to spend more time on video games than I should."}>
		<p>Items are a WIP 1</p>
		<p>Items are a WIP 2</p>
		<p>Items are a WIP 3</p>
	</Carousel>,
	"Pokémon": <Carousel title={"Pokémon"} description={"WIP Description"}>
		<p>Items are a WIP 1</p>
		<p>Items are a WIP 2</p>
		<p>Items are a WIP 3</p>
	</Carousel>,
	"Subreddits": <Carousel title={"Subreddits"} description={"WIP Description"}>
		<p>Items are a WIP 1</p>
		<p>Items are a WIP 2</p>
		<p>Items are a WIP 3</p>
	</Carousel>
};

/**
 * A React component that represents the entirety of the home page
 * Is in a component because it requires the currentSelectedCategory state field
 */
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentSelectedCategory: ""
		};
	}

	render() {
		return <div>
			<Meta />
			<Header />
			<h2>About me</h2>
			<ResponsiveContainer>
				<img responsiveWidth="3" src={"images/SaurabhToteyCancun.jpg"} alt={"Saurabh Totey"} style={{width: "100%"}} />
				<p responsiveWidth="9" style={{margin: "10px"}}>Hello! I am Saurabh Totey. I am a human male that is {new Date(new Date() - new Date(2000, 12, 5)).getFullYear() - 1970} years old. I currently live in Boulder, Colorado with my parents and my younger brother. In my free time, I spend a lot of my time trying to learn. My main passions are science and technology, but more specifically, I love learning all sorts of things such as programming, playing the piano, playing the cello, and modelling 3D objects. However, that isn't to say that I don't spend some of my free time doing other activities such as playing videogames or watching television series. I hope one day to make a great change in the world.</p>
			</ResponsiveContainer>
			<br/>
			<h2>Things I like</h2>
			<p>Select a category from the vertical list below to see my favorite things in that category.</p>
			<ResponsiveContainer>
				<div responsiveWidth="4" style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
					<SelectionList items={Object.keys(carousels)} onSelection={category => this.setState({ ...this.state, currentSelectedCategory: category })} />
				</div>
				<div responsiveWidth="8" style={{margin: "10px"}}>{carousels[this.state.currentSelectedCategory]}</div>
			</ResponsiveContainer>
			<br/>
			<Footer />
		</div>
	}

}

export default App
