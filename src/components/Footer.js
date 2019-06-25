import React from "react";
import {FaRegEnvelope, FaGithub, FaSpotify, FaSteam, FaYoutube, FaPhone} from "react-icons/fa";
import ResponsiveContainer from "./ResponsiveContainer";
import "../styles/Footer.css";

const icons = {
	email: {
		icon: FaRegEnvelope,
		path: "mailto:SaurabhTotey@gmail.com"
	},
	phone: {
		icon: FaPhone,
		path: "tel:7206482674"
	},
	github: {
		icon: FaGithub,
		path: "https://www.github.com/SaurabhTotey"
	},
	youtube: {
		icon: FaYoutube,
		path: "https://www.youtube.com/channel/UCXubVdV4RlI7ByEEDxziNcg"
	},
	spotify: {
		icon: FaSpotify,
		path: "https://open.spotify.com/user/saurabh-totey?si=QaRE9wybTc6FbwRiQayTWA"
	},
	steam: {
		icon: FaSteam,
		path: "https://steamcommunity.com/id/Lord_Strainer"
	}
};
const iconWidth = 100 / Object.keys(icons).length;

/**
 * A component that is the footer that should be at the bottom of all pages
 */
class Footer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			stickToBottom: false
		};
	}

	/**
	 * Checks whether the footer should stay where it is, or whether it needs to position itself manually at the bottom of the page
	 * TODO: this definitely won't be necessary when I have content on all the pages
	 */
	onWindowResize() {
		this.setState({ stickToBottom: window.innerHeight > document.body.clientHeight + document.getElementsByTagName("footer")[0].clientHeight + 10 })
	}

	componentDidMount() {
		this.onWindowResize();
		window.addEventListener("resize", () => this.onWindowResize());
	}

	render() {
		let style = { borderTop: "1px solid #454545", borderBottom: "1px solid #454545" };
		if (this.state.stickToBottom) {
			style = {
				...style,
				position: "absolute",
				bottom: "10px",
				width: "97%"
			}
		}
		return <footer style={style}>
			<ResponsiveContainer>
				<div responsiveWidth="3" style={{width: "100%", textAlign: "center"}}>Contact / Follow me:</div>
				<div responsiveWidth="9" style={{width: "100%"}}>{
					Object.keys(icons).map(icon => <a className={"footerLink"} href={icons[icon].path} style={{width:`${iconWidth}%`}}>{icons[icon].icon()}</a>)
				}</div>
			</ResponsiveContainer>
		</footer>
	}

}

export default Footer
