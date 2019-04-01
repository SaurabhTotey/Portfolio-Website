import React from "react";
import {FaRegEnvelope, FaGithub, FaSpotify, FaSteam, FaYoutube, FaPhone} from "react-icons/fa";
import ResponsiveContainer from "./ResponsiveContainer";

const icons = [<FaRegEnvelope/>, <FaPhone/>, <FaGithub/>, <FaYoutube/>, <FaSpotify/>, <FaSteam/>];
const iconWidth = 100 / icons.length;

export default () => (
	<footer style={{borderTop: "1px solid #454545", borderBottom: "1px solid #454545"}}>
		<ResponsiveContainer>
			<div responsiveWidth="25%" style={{width: "100%", textAlign: "center"}}>Contact me:&nbsp;</div>
			<div responsiveWidth="75%" style={{width: "100%"}}>{
				icons.map(icon => <div style={{width:`${iconWidth}%`, display: "inline-block", textAlign: "center"}}>{icon}</div>)
			}</div>
		</ResponsiveContainer>
	</footer>
)
