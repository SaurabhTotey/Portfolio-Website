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

export default () => (
	<footer>
		<ResponsiveContainer>
			<div responsiveWidth="3" style={{width: "100%", textAlign: "center"}}>Contact / Follow me:</div>
			<div responsiveWidth="9" style={{width: "100%"}}>{
				Object.keys(icons).map(icon => <a className={"footerLink"} href={icons[icon].path} style={{width:`${iconWidth}%`}} key={icon}>{icons[icon].icon()}</a>)
			}</div>
		</ResponsiveContainer>
	</footer>
)
