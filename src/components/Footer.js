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
	 * After a 50ms time delay, checks whether the footer should be vertical
	 * 50ms delay is to allow for all other components to resize first
	 * TODO: bind to state of responsivecontainers rather than having an arbitrary flat 50ms delay
	 * TODO: sometimes this doesn't work as I want it to and it overlays on top of the body content when reducing window size
	 */
	onWindowResize() {
		setTimeout(() => this.setState({ stickToBottom: window.innerHeight > document.body.clientHeight + document.getElementsByTagName("footer")[0].clientHeight + 10 }), 50);
	}

	componentDidMount() {
		this.onWindowResize();
		window.addEventListener("resize", this.onWindowResize.bind(this));
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
