import React from "react";
import Carousel from "../components/Carousel"
import Footer from "../components/Footer";
import Header from "../components/Header";
import ResponsiveContainer from "../components/ResponsiveContainer";
import SelectionList from "../components/SelectionList";

function CarouselInformation(title, description, items) {
	this.title = title;
	this.description = description;
	this.items = items;
}

function CarouselItem(name, imageUrl, description) {
	this.name = name;
	this.imageUrl = imageUrl;
	this.description = description;
}

const carouselInformation = [
	new CarouselInformation(
		"Programming Languages",
		"I write code mostly as a hobby. As such, I use a lot of programming languages. I really like languages that have object oriented features, functional features, and metaprogramming. I believe that the value of a language should be deemed on how hard it is to make mistakes when writing code with that language.",
		[
			new CarouselItem(
				"Kotlin",
				"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin-logo.svg/220px-Kotlin-logo.svg.png",
				"Kotlin is by far my favorite programming language. Kotlin boasts easy-to-use functional programming, great support for object oriented, and overall general ease of use. Pair this with its great cross-platform capabilities and easy integration with existing Java code, and you are left with no reason not to use Kotlin. It is very clear that Kotlin was made by people who write code, and I am really upset writing projects in languages that aren't Kotlin. The only thing I wish Kotlin had is metaprogramming."
			),
			new CarouselItem(
				"D",
				"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/D_Programming_Language_logo.svg/440px-D_Programming_Language_logo.svg.png",
				"D is how I first learned about the beauty and joys of functional programming. I originally only picked up D because it had the syntax of Java without being limited in the same ways as Java. However, I stayed because of the powerful metaprogramming capabilities. I only wish other languages had the power of D in regards to this aspect. I wish D had more support with external libraries, because it really is a very pleasant language to work in. One of the only complaints I have with the language itself is that it has very cryptic error messages that make it hard to debug."
			)
		]
	),
	new CarouselInformation(
		"TV Shows",
		"I watch a lot of television during my free time. I really enjoy shows that build believable worlds and characters. I am completely fine suspending my disbelief for the premise of a show, but I want to see how a show takes an interesting premise and develops it into a fascinating story with an interesting plot.",
		[
			new CarouselItem(
				"Game of Thrones",
				"https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/episodes/1/game-of-thrones-1-1920x1080.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
				"Despite it's seemingly rushed conclusion, Game of Thrones has been one of the best television series I have seen. It's been a great journey following each character through their respective story arcs. I really enjoyed seeing the twists and turns that the story took. The story was quite interesting and well-written until the last season, where the story seemed to be rushed to a premature, unnecessarily-shocking, and unsatisfying end."
			),
			new CarouselItem(
				"Last Week Tonight with John Oliver",
				"https://m.media-amazon.com/images/M/MV5BZDJmNGIwNDEtMjRlMC00NGQ2LTg2OGMtZmE2NjUwZjRmYWVlXkEyXkFqcGdeQXVyNjU2ODM5MjU@._V1_.jpg",
				"Last Week Tonight has been a hilarious show that ends up teaching me things while I watch it. What isn't to love? This show is different from what I usually watch, because this show is more of an episodic information broadcast rather than a story about adventure or journey."
			),
			new CarouselItem(
				"Hunter X Hunter",
				"https://dw9to29mmj727.cloudfront.net/promo/2016/5252-SeriesHeaders_HxH_2000x800.jpg",
				"What starts off as a journey for a kid to get his Hunter's License turns into a world-spanning adventure of revenge, reunion, and horror. I love so many aspects of this show, such as how the story is one continuous stream of events, or how each character really does grow, even after they have achieved their \"main goals\". My favorite part of this show is near the ending where there is a consistent theme of humans becoming crueler and more like monsters while the literal monsters start gaining more emotions and becoming more human. My only gripe about this show is that it has a slow start, which makes it impossible to convince others to watch this show far enough to actually enjoy it."
			),
			new CarouselItem(
				"Re:Zero − Starting Life in Another World",
				"https://img1.ak.crunchyroll.com/i/spire2/95445cd55c37ce2ff04ef1adde79f50c1529088362_full.jpg",
				"I was initially very hesitant to start watching this show. I thought it was just another show where the protagonist gets transported into another world and has a great time. I couldn't be more wrong. Watching this show felt like I was watching torture taking place. The protagonist undergoes so much trouble, and the fact that the protagonist cannot tell anyone about the problems that he has to face alone is what really makes his situations feel unfair. I really like how this story is one of failure and then redemption: the protagonist repeatedly fails to take actions in a sane way and then gets punished for it, but he ends up having to redeem himself for his failures."
			),
			new CarouselItem(
				"Code Geass: Lelouch of the Rebellion",
				"https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_60,h_750,w_1920/oth/FunimationStoreFront/1498654/Japanese/1498654_Japanese_ShowDetailHeaderDesktop_5412210a-e3ab-e811-8175-020165574d09.jpg",
				"This show was a rollercoaster. It really made me think about whether the protagonist was a \"good guy\" or a \"bad guy\". It was really hard watching everyone even remotely close to the protagonist betray him, even though he only had the best of intentions for all of them and the world. This show was extremely captivating the entire way through, and really knew how to make a great ending that tied everything together. However, I must file my extremely small and nitpicky gripe that chess is supposed to be a huge metaphor in the show, but at one point, two main characters play chess, and one makes an illegal move."
			),
			new CarouselItem(
				"Made in Abyss",
				"https://images-na.ssl-images-amazon.com/images/I/911d5AdE4pL._RI_.jpg",
				"Whenever I try and convince others to try watching anime, I recommend they start with this show. It has a great art style, an extremely intriguing plot with many mysteries, and lots and lots of suffering. The show asks the question of when life is worth living in a really interesting way, and breaks my heart many times along the journey."
			),
			new CarouselItem(
				"Attack on Titan",
				"https://ib3.hulu.com/user/v3/artwork/9c91ffa3-dc20-48bf-8bc5-692e37c76d88?base_image_bucket_name=hummus&base_image=d13c235d-7145-45ff-adaa-b99f79254521&size=400x600&format=jpeg",
				"This show is about fighting and surviving in a hopeless and seemingly tiny world. Every character faces their moments of despair, and watching the characters learn about the worlds mysteries is extremely interesting. It is also interesting seeing how each \"side\" of this story at some point is required to devolve to cruelty and monstrosity in order to win to help the greater good. I also love how this show is littered with symbolism and really does prioritize on telling a captivating if yet heartbreaking story about a human struggle for freedom."
			)
		]
	),
	new CarouselInformation(
		"Video Games",
		"This carousel is WIP! There is nothing more satisfying than playing video games. The feeling of accomplishment I get after finishing some endeavor makes me feel unimaginably satisfied. I like videogames that either are imaginative and force me to think outside the box, give me a sense of exploration, or have an interesting story. My love for overcoming challenges has probably caused me to spend more time on video games than I should.",
		[
			new CarouselItem("Hollow Knight"),
			new CarouselItem("Legend of Zelda: Skyward Sword"),
			new CarouselItem("Legend of Zelda: The Minish Cap"),
			new CarouselItem("Super Mario Galaxy"),
			new CarouselItem("New Super Mario Bros."),
			new CarouselItem("Monster Hunter World"),
			new CarouselItem("Terraria"),
			new CarouselItem("Minecraft")
		]
	),
	new CarouselInformation(
		"Pokémon",
		"This carousel is WIP!",
		[
			new CarouselItem("Typhlosion"),
			new CarouselItem("Slurpuff"),
			new CarouselItem("Shuckle"),
			new CarouselItem("Magnezone"),
			new CarouselItem("Ferrothorn"),
			new CarouselItem("Mewtwo")
		]
	),
	new CarouselInformation(
		"Movies",
		"This carousel is WIP!",
		[
			new CarouselItem("The Avengers"),
			new CarouselItem("Spiderman: Into the Spiderverse"),
			new CarouselItem("Star Wars: Revenge of the Sith"),
			new CarouselItem("Indiana Jones and the Last Crusade"),
			new CarouselItem("Interstellar")
		]
	)
];

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
		this.currentInformation = new CarouselInformation("", "", [new CarouselItem("", "", "")]);
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
		this.currentInformation = carouselInformation.find(information => information.title === nextState.currentSelectedCategory);
		if (!this.currentInformation) {
			this.currentInformation = new CarouselInformation("", "", [new CarouselItem("", "", "")]);
		}
	}

	render() {
		return <div>
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
					<SelectionList items={carouselInformation.map(information => information.title)} onSelection={category => this.setState({ ...this.state, currentSelectedCategory: category })} ariaLabel={"A list of buttons that make the carousel display my favorite items from the button's named category."} />
				</div>
				<div responsiveWidth="8" style={{margin: "10px"}}>
					<Carousel title={this.currentInformation.title} description={this.currentInformation.description}>{
						this.currentInformation.items.map(item => <div>
							<h4>{item.name}</h4>
							<img src={item.imageUrl} alt={item.name} height={150} style={{maxWidth: "295px"}} />
							<p>{item.description}</p>
						</div>)
					}</Carousel>
				</div>
			</ResponsiveContainer>
			<br/>
			<Footer />
		</div>
	}

}

export default App
