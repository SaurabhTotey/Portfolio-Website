import React from "react";
import {FaRegEnvelope, FaGithub, FaSpotify, FaSteam, FaYoutube, FaPhone} from "react-icons/fa";
import ResponsiveContainer from "./ResponsiveContainer";

const icons = [<FaRegEnvelope/>, <FaPhone/>, <FaGithub/>, <FaYoutube/>, <FaSpotify/>, <FaSteam/>];
const iconWidth = 100 / icons.length;

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

	onWindowResize() {
		this.setState({ stickToBottom: window.innerHeight > document.body.clientHeight });
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
				bottom: "5px",
				width: "97%"
			}
		}
		return <footer style={style}>
			<ResponsiveContainer>
				<div responsiveWidth="25%" style={{width: "100%", textAlign: "center"}}>Contact me:&nbsp;</div>
				<div responsiveWidth="75%" style={{width: "100%"}}>{
					icons.map(icon => <div style={{width:`${iconWidth}%`, display: "inline-block", textAlign: "center"}}>{icon}</div>)
				}</div>
			</ResponsiveContainer>
		</footer>
	}

}

export default Footer
