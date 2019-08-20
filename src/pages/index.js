import React from "react";
import Carousel from "../components/Carousel";
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
			),
			new CarouselItem(
				"Fullmetal Alchemist: Brotherhood",
				"https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
				"Fullmetal Alchemist: Brotherhood is a great show that makes promises about what its plot will entail, and then delivers on those promises. It is overall just a great show that is very well thought with a satisfying ending."
			),
			new CarouselItem(
				"The Boys",
				"https://m.media-amazon.com/images/M/MV5BMjdjOTliZTQtM2FhNS00Mjk3LWJiOTgtMWJlMTg4MDgyNzc1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
				"I really like the types of shows that deconstruct specific genres. The Boys does this perfectly for the superhero genre by taking the essentials of comic book heroism and applying a dose of reality. This show is extremely violent and gory, but I love it. Every time that characters get intimate, I am on edge because good fortune is scarce in the universe of this show. I especially love that the heroes are just like normal people with super powers: they still fall prey to fame, money, drugs, and all sorts of other things that hook 'normal people'."
			)
		]
	),
	new CarouselInformation(
		"Video Games",
		"There is nothing more satisfying than playing videogames. The feeling of accomplishment I get after finishing some endeavor makes me feel unimaginably satisfied. I like videogames that either are imaginative and force me to think outside the box, give me a sense of exploration, or have an interesting story. My love for overcoming challenges has probably caused me to spend more time on videogames than I should.",
		[
			new CarouselItem(
				"Hollow Knight",
				"https://ksr-ugc.imgix.net/assets/020/108/042/722ae9a8bcadd5ca2b87b687d341d8a8_original.jpg?ixlib=rb-2.1.0&w=700&fit=max&v=1517649022&auto=format&frame=1&q=92&s=e502f26aae4456246a7a72df523abaef",
				"I am always amazed at the quality of work that went in to such a low-cost game. For only $15, I was able to get an unforgettable experience playing a game about bugs in the dark depths of a post-apocalyptic underground civilization. The gameplay is fluid and satisfying, and I really loved exploring and uncovering the mysteries of what had happened."
			),
			new CarouselItem(
				"Legend of Zelda: Skyward Sword",
				"https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/wii_24/SI_Wii_TheLegendOfZeldaSkywardSword_image1600w.jpg",
				"This was one of my first 3D Legend of Zelda games, and I am glad it was. The gameplay is fun, the bosses are inventive and imaginative, and the story is captivating. When I first got the beetle item, I knew that buying this game was a good choice. I am also a fan of the fact that this game has a lot of content, especially when compared to other modern triple-A titles. I especially loved how vast and interesting each of the dungeons were. The only issue that I have with this game is that the motion controls can be a bit hard to use and deal with."
			),
			new CarouselItem(
				"Legend of Zelda: The Minish Cap",
				"https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/game_boy_advance_7/SI_GBA_TheLegendOfZeldaTheMinishCap_image1600w.jpg",
				"If someone says '2D game,' I think of this specific Legend of Zelda game. This game was a really fun time overall, and I really enjoyed the inventive dungeons and creative items. To me, the extra sword skill mechanics were really cool. I can still remember the feelings of satisfaction I got whenever I would accidentally stumble into one of the blade brothers after spending a long time exploring. I really think this game is quite underrated, and I hope that it gets a remake at some point."
			),
			new CarouselItem(
				"Super Mario Galaxy",
				"https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/wii_24/SI_Wii_SuperMarioGalaxy_image1600w.jpg",
				"I don't think there are many people that actually don't like this game. It seems to be universally loved, and all for good reason. I believe this game is partially responsible for forever changing the landscape of 3D games due to how innovative the ideas from this game are. It is a 'platformer' unlike any other. The graphics from this game especially stand out to me for some reason, even though they are not too high in resolution."
			),
			new CarouselItem(
				"New Super Mario Bros.",
				"https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_ds_22/SI_NDS_NewSuperMarioBrosDS_image1600w.jpg",
				"I have really fond memories of this game. This is probably partially in part due to the fact that this game is the first videogame I have ever played in my life. For a platformer, this game really has it all: great level design, lots of thematic levels, really cool easter eggs, and cooperative play. What isn't there to love about this game? However, I mostly just love this game because to me, it marks my introduction to gaming, and I am super glad that I was introduced with an extremely fun and entertaining game."
			),
			new CarouselItem(
				"Monster Hunter World",
				"https://steamcdn-a.akamaihd.net/steam/apps/582010/header.jpg?t=1554771889",
				"While I have enjoyed many Monster Hunter games, this specific game is on my list of favorites due to how widespread and hit it is. What really makes the Monster Hunter series special for me is that I can enjoy the games with others. This series of games really succeeds in making great cooperative multiplayer experiences. I have spent a long time playing games from this series with my brother. By the way, I am an insect-glaive diehard. With the insect-glaive, even winged monsters look grounded when compared to me!"
			),
			new CarouselItem(
				"Terraria",
				"https://steamcdn-a.akamaihd.net/steam/apps/105600/header.jpg?t=1548954652",
				"Terraria is the ultimate power-fantasy. I really appreciate how well Terraria handles power-scaling and mastery. Even though Terraria has hit critical success, I feel like it is still underrated. I do try to do my part though: I have gifted this game to many friends over the years just so we can have a ton of fun together. From fishing to exploring to fighting, this game really has it all. I have probably done dozens of run-throughs of this game, and each time is a completely different experience. My only issue with this game is its lack of good inventory management."
			),
			new CarouselItem(
				"Minecraft",
				"https://media.mojang.com/blog-image/2c34ca1217c7d95e76a6f8d646adf9208f78145a/blogmcnet.png",
				"Minecraft is a great and fun game. Everyone knows that already. However, with mods, the game is transformed into something completely different. It turns into a simulator where I must manage resources like time, energy, food, and materials with the utmost precision. However, I mostly enjoy Minecraft because it allows me to really do anything I want with anyone I want. This game has so much to do and allows for so many experiences, that it, despite its $30 cost, is really invaluable."
			)
		]
	),
	new CarouselInformation(
		"Movies",
		"I believe that movies are the first type of media that I have actively consumed in my life. I like movies for much of the same reasons that I like TV Shows. The only real difference to me is that movies are shorter, more approachable, and more palatable for a wider audience.",
		[
			new CarouselItem(
				"The Avengers",
				"https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg",
				"This movie is groundbreaking. I believe this is the first movie to really sculpt its own movie universe in a large and satisfying way. What I would normally think only accomplishable with more time in TV series was instead achieved for a massive audience on the big screen. I really enjoyed how they brought together a collection of what used to be individual characters into a larger group that pushes forwards in some grander narrative. I think that what this movie has accomplished is really amazing and has yet to be emulated elsewhere."
			),
			new CarouselItem(
				"Spider-Man",
				"https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg",
				"I used to watch this movie a lot when I was younger. This movie was probably my favorite for a long time. I overall just have fond memories repeatedly watching this movie. I think what fascinated me so much was the dual nature of Peter's life juggling being a hero with his personal life. Probably due to this movie, Spider-Man has always been one of my favorite superheroes."
			),
			new CarouselItem(
				"Star Wars: Revenge of the Sith",
				"https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg/220px-Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg",
				"I remember watching this movie at least once every day for a period in my life. I really enjoy the Star Wars series, but I think this movie is especially good and holds up quite well. On my most recent rewatch, I found it really cool how lighting was used to foreshadow Anakin's turn to the dark side. Even when I was younger, I was a huge fan of the CG (contrary to the opinions of most), and Anakin's turn to the dark side always tugged on my heartstrings a little."
			),
			new CarouselItem(
				"Indiana Jones and the Last Crusade",
				"https://m.media-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
				"Just as I have always been a fan of Star Wars, I have similarly always been a fan of Indiana Jones. I never really understood the movies when I was younger, and I just enjoyed the action. However, this movie is my favorite of the series just because of its intriguing story and cool little attentions to detail. Just from how much detail was put into this, I feel like this movie was made with a huge amount of love, care, and attention."
			),
			new CarouselItem(
				"Interstellar",
				"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
				"I feel like this movie is dense with plot information. That alone makes me enjoy this movie a lot. However, I enjoy this movie even more because I also think physics is cool. I really like that the producers of this film went the extra mile to render realistic black holes and hired a Nobel Laureate physicist just to get a few extra details right. I am able to overlook inaccuracies such as 'love being a fundamental force' due to their relevance to the story that is being told. The point of this movie is, after all, to tell a story first and foremost, and I think that that works out really well here."
			),
			new CarouselItem(
				"3 Idiots",
				"https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
				"This movie is one of the few Bollywood movies that I really like. It manages to be really funny even while at times addressing serious topics."
			)
		]
	),
	new CarouselInformation(
		"Pokémon",
		"I have spent a lot of my youth playing Pokémon games. My first Pokémon game was Pokémon SoulSilver. Here are some of my subjective favorite Pokémon.",
		[
			new CarouselItem(
				"Typhlosion",
				"https://cdn.bulbagarden.net/upload/thumb/4/47/157Typhlosion.png/250px-157Typhlosion.png",
				"Typhlosion was not only my first Pokémon, but also my first level 100 Pokémon. My favorite type is also fire type."
			),
			new CarouselItem(
				"Slurpuff",
				"https://cdn.bulbagarden.net/upload/thumb/8/8d/685Slurpuff.png/250px-685Slurpuff.png",
				"I always loved surprising people with an attack Slurpuff that had the belly drum move, a sitrus berry, and the unburden ability. This moveset usually was enough to sweep most opposing teams."
			),
			new CarouselItem(
				"Shuckle",
				"https://cdn.bulbagarden.net/upload/thumb/c/c7/213Shuckle.png/250px-213Shuckle.png",
				"Shuckle is the best wall ever. With huge amounts of defense, I was able to absorb almost any hit with Shuckle. Pair that with the rest move, and you get an invincible Shuckle."
			),
			new CarouselItem(
				"Magnezone",
				"https://cdn.bulbagarden.net/upload/thumb/5/53/462Magnezone.png/250px-462Magnezone.png",
				"I just think Magnezone looks cool. I also just generally like steel type Pokémon."
			),
			new CarouselItem(
				"Ferrothorn",
				"https://cdn.bulbagarden.net/upload/thumb/6/6c/598Ferrothorn.png/250px-598Ferrothorn.png",
				"I just think Ferrothorn looks cool. I also just generally like steel type Pokémon."
			),
			new CarouselItem(
				"Mewtwo",
				"https://cdn.bulbagarden.net/upload/thumb/7/78/150Mewtwo.png/250px-150Mewtwo.png",
				"I like the concepts behind a lot of legendary Pokémon. I do, however, think that out of those legendaries, Mewtwo has the coolest concept. I personally think that the idea of a GMO Pokémon is pretty epic. That, and Mewtwo also looks pretty weird and cool."
			)
		]
	),
	new CarouselInformation(
		"Bloons TD 6 Monkeys",
		"I really enjoy the Bloons Tower Defense games. They are always super addicting and I really like planning out different defense strategies. I find it quite intriguing how the monkeys have such an intense hatred for balloons.",
		[
			new CarouselItem(
				"Druid",
				"https://vignette.wikia.nocookie.net/b__/images/b/be/500-Druid.png/revision/latest/scale-to-width-down/620?cb=20190522024840&path-prefix=bloons",
				"I loved the wizard monkey in BTD5. When I saw that the wizard monkey in BTD6 didn't have lightning or tornadoes, I was very disappointed. My day was almost ruined until I realized that the druid had practically taken over the responsibilities of the old wizard. Not only that, but the druid was actually also much better and cooler-looking to boot."
			),
			new CarouselItem(
				"Monkey Buccaneer",
				"https://vignette.wikia.nocookie.net/b__/images/f/ff/500-MonkeyBuccaneer.png/revision/latest/scale-to-width-down/620?cb=20190522024713&path-prefix=bloons",
				"I used to hate the idea of water and water-based monkeys. Then, I actually tried using the monkey buccaneer. Now I wish there was more water in maps. This monkey has two great upgrade paths. One makes me tons of bananas. The other one quenches my old desire of not liking water by allowing me to place monkeys on it. Additionally, the best upgrade path also spawns 3 cool-looking planes that fly around and add more chaos to the screen."
			),
			new CarouselItem(
				"Alchemist",
				"https://vignette.wikia.nocookie.net/b__/images/5/5e/500-Alchemist.png/revision/latest/scale-to-width-down/620?cb=20190522005559&path-prefix=bloons",
				"If there is one monkey I am guaranteed to buy, it is the alchemist. All of the alchemist's upgrade paths are good: one provides huge buffs to nearby monkeys, another has great damage, and the last provides great financial support. No matter what is done with an alchemist, it proves to be fruitful for a good defense."
			),
			new CarouselItem(
				"Ninja Monkey",
				"https://vignette.wikia.nocookie.net/b__/images/a/a5/500-NinjaMonkey.png/revision/latest/scale-to-width-down/620?cb=20190522024711&path-prefix=bloons",
				"I think the idea of the ninja monkey is cool. It also provides great damage against balloons. Because it can see camo-balloons by default, buying this monkey is a no-brainer for most defenses."
			),
			new CarouselItem(
				"Sniper Monkey",
				"https://vignette.wikia.nocookie.net/b__/images/7/78/005-SniperMonkey.png/revision/latest?cb=20190522023059&path-prefix=bloons",
				"In previous BTD games, I HATED the sniper. I just thought that the idea of a global tower was dumb, and that the sniper had to be weak to compensate. In this game, I actually tried it out. All I can say is wow. The sniper can almost single-handedly manage most tough situations. Whether it be a 4-0-2 sniper or a 2-0-4 sniper, the addition of a sniper always makes for a stronger defense."
			),
			new CarouselItem(
				"Benjamin",
				"https://vignette.wikia.nocookie.net/b__/images/f/f4/BenJamminPortrait.png/revision/latest?cb=20190712041659&path-prefix=bloons",
				"I think both skins for Benjamin are just the best. I love the code monkey pun, and I also am enchanted by the deeply intellectual voice lines for DJ Benjammin' (such as \"Yeet\" and \"Boom bloon, get out the way\"). Additionally, Benjamin is indispensable for co-op mode due to his money-making abilities."
			)
		]
	),
];

/**
 * A React component that represents the entirety of the home page
 * Is in a component because it requires the currentSelectedCategory state field
 */
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentSelectedCategory: "Programming"
		};
		this.previousSelectedCategory = null;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		this.previousSelectedCategory = prevState.currentSelectedCategory;
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
					<SelectionList items={carouselInformation.map(information => information.title)} onSelection={category => this.setState({ ...this.state, currentSelectedCategory: category })} ariaLabel={"A list of buttons that make the carousel display my favorite items from the button's named category."} ariaControls={"carouselsContainer categoryDescriptionsContainer"} />
				</div>
				<div responsiveWidth="8" style={{margin: "10px"}} id={"carouselsContainer"} aria-live={"polite"}>{
					carouselInformation.map(information => <div className={this.state.currentSelectedCategory !== information.title ? "hidden" : ""} aria-hidden={this.state.currentSelectedCategory !== information.title} key={information.title}>
						<Carousel title={information.title}>{
							information.items.map(item => <div key={item}>
								<h4>{item.name}</h4>
								<img src={item.imageUrl} alt={item.name} height={150} style={{maxWidth: "295px"}} />
								<p>{item.description}</p>
							</div>)
						}</Carousel>
					</div>)
				}</div>
			</ResponsiveContainer>
			<div id={"categoryDescriptionsContainer"} aria-live={"polite"} style={{textAlign: "center", minHeight: "12rem", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative"}}>{
				carouselInformation.map(info => {
					let className = this.state.currentSelectedCategory === info.title ? "" : "hidden";
					const style = { position: "absolute", width: "100%" };
					if (this.previousSelectedCategory !== "" && [this.previousSelectedCategory, this.state.currentSelectedCategory].includes(info.title)) {
						className = "animation";
						style["--animation-name"] = this.state.currentSelectedCategory === info.title ? "fadeIn" : "fadeOut";
					}
					return <p className={className} style={style} aria-hidden={this.state.currentSelectedCategory !== info.title} key={info.title}>{info.description}</p>
				})
			}</div>
			<br/>
			<Footer />
		</div>
	}

}

export default App
