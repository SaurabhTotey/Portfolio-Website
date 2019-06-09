import React from "react";
import Carousel from "../components/Carousel"
import Footer from "../components/Footer";
import Header from "../components/Header";
import Meta from "../components/Meta";
import ResponsiveContainer from "../components/ResponsiveContainer";
import SelectionList from "../components/SelectionList";

const carousels = {
	"Programming Languages": <Carousel title={"Programming Languages"} showTimeLength={"60000"} description={"I write code mostly as a hobby. As such, I use a lot of programming languages. I really like languages that have object oriented features, functional features, and metaprogramming. I believe that the value of a language should be deemed on how hard it is to make mistakes when writing code with that language."}>
		<div>
			<h4>Kotlin</h4>
			<img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin-logo.svg/220px-Kotlin-logo.svg.png"} alt={"Kotlin"} height={"100"} />
			<p>Kotlin is by far my favorite programming language. Kotlin boasts easy-to-use functional programming, great support for object oriented, and overall general ease of use. Pair this with its great cross-platform capabilities and easy integration with existing Java code, and you are left with no reason not to use Kotlin. It is very clear that Kotlin was made by people who write code, and I am really upset writing projects in languages that aren't Kotlin. The only thing I wish Kotlin had is metaprogramming.</p>
		</div>
		<div>
			<h4>D</h4>
			<img src={"https://dlang.org/images/dlogo.svg"} alt={"D"} height={"100"} />
			<p>D is how I first learned about the beauty and joys of functional programming. I originally only picked up D because it had the syntax of Java without being limited in the same ways as Java. However, I stayed because of the powerful metaprogramming capabilities. I only wish other languages had the power of D in regards to this aspect. I wish D had more support with external libraries, because it really is a very pleasant language to work in. One of the only complaints I have with the language itself is that it has very cryptic error messages that make it hard to debug.</p>
		</div>
	</Carousel>,
	"TV Shows": <Carousel title={"TV Shows"} showTimeLength={"60000"} description={"I watch a lot of television during my free time. I really enjoy shows that build believable worlds and characters. I am completely fine suspending my disbelief for the premise of a show, but I want to see how a show would take an interesting premise and develop it into a fascinating story with an interesting plot."}>
		<div>
			<h4>Game of Thrones</h4>
			<img src={"https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/episodes/1/game-of-thrones-1-1920x1080.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg"} alt={"Game of Thrones"} height={"100"} />
			<p>Despite it's seemingly rushed conclusion, Game of Thrones has been one of the best television series I have seen. It's been a great journey following each character through their respective story arcs. I really enjoyed seeing the twists and turns that the story took. The story was quite interesting and well-written until the last season, where the story seemed to be rushed to a premature, unnecessarily-shocking, and unsatisfying end.</p>
		</div>
		<div>
			<h4>Last Week Tonight with John Oliver</h4>
			<img src={"https://m.media-amazon.com/images/M/MV5BZDJmNGIwNDEtMjRlMC00NGQ2LTg2OGMtZmE2NjUwZjRmYWVlXkEyXkFqcGdeQXVyNjU2ODM5MjU@._V1_.jpg"} alt={"Last Week Tonight with John Oliver"} height={"100"} />
			<p>Last Week Tonight has been a hilarious show that ends up teaching me things while I watch it. What isn't to love? This show is different from what I usually watch, because this show is more of an episodic information broadcast rather than a story about adventure or journey.</p>
		</div>
		<div>
			<h4>Hunter X Hunter</h4>
			<img src={"https://dw9to29mmj727.cloudfront.net/promo/2016/5252-SeriesHeaders_HxH_2000x800.jpg"} alt={"Hunter X Hunter"} height={"100"} />
			<p>What starts off as an innocent journey for a kid to get his Hunter's License turns into a world-spanning adventure trying to survive the world's horrors. I love so many aspects of this show, such as how the story never takes a break and is one continuous series of events. Another aspect of this show that I love is how each character really does grow, even after they have achieved their supposed "main goals". My only gripe about this show is that it has a slow start, which makes it really hard to convince others to watch this show far enough.</p>
		</div>
		<div>
			<h4>Re:Zero − Starting Life in Another World</h4>
		</div>
		<div>
			<h4>Code Geass: Lelouch of the Rebellion</h4>
		</div>
		<div>
			<h4>Made in Abyss</h4>
		</div>
		<div>
			<h4>Adam Ruins Everything</h4>
		</div>
	</Carousel>,
	"Video Games": <Carousel title={"Video Games"} showTimeLength={"60000"} description={"There is nothing more satisfying than playing video games. The feeling of accomplishment I get after finishing some endeavor makes me feel unimaginably satisfied. I like videogames that either are imaginative and force me to think outside the box, give me a sense of exploration, or have an interesting story. My love for overcoming challenges has probably caused me to spend more time on video games than I should."}>
		<div>
			<h4>Hollow Knight</h4>
		</div>
		<div>
			<h4>Legend of Zelda: Skyward Sword</h4>
		</div>
		<div>
			<h4>Legend of Zelda: The Minish Cap</h4>
		</div>
		<div>
			<h4>Super Mario Galaxy</h4>
		</div>
		<div>
			<h4>New Super Mario Bros.</h4>
		</div>
		<div>
			<h4>Monster Hunter World</h4>
		</div>
		<div>
			<h4>Terraria</h4>
		</div>
		<div>
			<h4>Minecraft</h4>
		</div>
	</Carousel>,
	"Pokémon": <Carousel title={"Pokémon"} showTimeLength={"60000"} description={"WIP Description"}>
		<div>
			<h4>Typhlosion</h4>
		</div>
		<div>
			<h4>Slurpuff</h4>
		</div>
		<div>
			<h4>Shuckle</h4>
		</div>
		<div>
			<h4>Seismitoad</h4>
		</div>
		<div>
			<h4>Mewtwo</h4>
		</div>
	</Carousel>,
	"Movies": <Carousel title={"Movies"} showTimeLength={"60000"} description={"WIP Description"}>
		<div>
			<h4>The Avengers</h4>
		</div>
		<div>
			<h4>Spider-Man</h4>
		</div>
		<div>
			<h4>Spiderman: Into the Spiderverse</h4>
		</div>
		<div>
			<h4>Star Wars: Revenge of the Sith</h4>
		</div>
		<div>
			<h4>Indiana Jones and the Last Crusade</h4>
		</div>
		<div>
			<h4>Mission Impossible</h4>
		</div>
		<div>
			<h4>Interstellar</h4>
		</div>
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
