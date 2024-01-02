import React from "react";
import { FaRegEnvelope, FaGithub, FaReddit } from "react-icons/fa";
import ResponsiveContainer from "./ResponsiveContainer";
import "../styles/Footer.css";

const icons = {
	email: {
		icon: FaRegEnvelope,
		path: "mailto:SaurabhToteyAccount@skiff.com",
		text: ["Saurabh", "Totey", "[at]", "skiff", ".com"],
	},
	github: {
		icon: FaGithub,
		path: "https://www.github.com/SaurabhTotey",
		text: ["Saurabh", "Totey"],
	},
	reddit: {
		icon: FaReddit,
		path: "https://www.reddit.com/u/SaurabhTotey",
		text: ["/u/", "Saurabh", "Totey"],
	},
};
const iconWidth = 100 / Object.keys(icons).length;

function Footer() {
	return (
		<footer>
			<ResponsiveContainer responsiveWidths={[3, 9]}>
				<div className="promptContainer">
					<h5 className="prompt">Contact / Follow me:</h5>
				</div>
				<div className="contentContainer">
					{Object.keys(icons).map((icon) => (
						<div className="footerLinkContainer" style={{ width: `${iconWidth}%` }} key={icon}>
							<a className={"footerLink"} href={icons[icon].path} aria-label={icon}>
								{icons[icon].icon()}
							</a>
							<p className="footerLinkText">
								{icons[icon].text.map((textChunk, i) => (
									<span key={i}>
										{textChunk}
										{i != icons[icon].text.length - 1 && <wbr />}
									</span>
								))}
							</p>
						</div>
					))}
				</div>
			</ResponsiveContainer>
		</footer>
	);
}
export default Footer;
