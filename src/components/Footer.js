import React from "react";
import { FaRegEnvelope, FaGithub, FaReddit } from "react-icons/fa";
import { SiDuolingo } from "react-icons/si";
import ResponsiveContainer from "./ResponsiveContainer";
import "../styles/Footer.css";

const icons = {
	email: {
		icon: FaRegEnvelope,
		path: "mailto:SaurabhToteyAccount@skiff.com",
		text: "SaurabhTotey[at]skiff.com",
	},
	github: {
		icon: FaGithub,
		path: "https://www.github.com/SaurabhTotey",
		text: "SaurabhTotey",
	},
	reddit: {
		icon: FaReddit,
		path: "https://www.reddit.com/u/SaurabhTotey",
		text: "/u/SaurabhTotey",
	},
	duolingo: {
		icon: SiDuolingo,
		path: "https://www.duolingo.com/profile/SaurabhTotey",
		text: "SaurabhTotey",
	},
};
const iconWidth = 100 / Object.keys(icons).length;

function Footer() {
	return (
		<footer>
			<ResponsiveContainer responsiveWidths={[3, 9]}>
				<div className="promptContainer">Contact / Follow me:</div>
				<div style={{ width: "100%" }}>
					{Object.keys(icons).map((icon) => (
						<div className="footerLinkContainer" style={{ width: `${iconWidth}%` }} key={icon}>
							<a className={"footerLink"} href={icons[icon].path} aria-label={icon}>
								{icons[icon].icon()}
							</a>
							<p className="footerLinkText">{icons[icon].text}</p>
						</div>
					))}
				</div>
			</ResponsiveContainer>
		</footer>
	);
}
export default Footer;
