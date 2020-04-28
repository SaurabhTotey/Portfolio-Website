import React from "react";
import {FaRegEnvelope, FaPhone, FaGithub, FaReddit, FaTwitter} from "react-icons/fa";
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
	reddit: {
		icon: FaReddit,
		path: "https://www.reddit.com/u/SaurabhTotey"
	},
	twitter: {
		icon: FaTwitter,
		path: "https://twitter.com/SaurabhTotey"
	}
};
const iconWidth = 100 / Object.keys(icons).length;

export default () => (
	<footer>
		<ResponsiveContainer responsiveWidths={[3, 9]}>
			<div style={{width: "100%", textAlign: "center"}}>Contact / Follow me:</div>
			<div style={{width: "100%"}}>{
				Object.keys(icons).map(icon => <a className={"footerLink"} href={icons[icon].path} style={{width:`${iconWidth}%`}} key={icon} aria-label={icon}>{icons[icon].icon()}</a>)
			}</div>
		</ResponsiveContainer>
	</footer>
)
