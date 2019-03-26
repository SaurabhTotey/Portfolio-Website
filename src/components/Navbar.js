import React from "react";
import { Link } from "gatsby";
import "../styles/Navbar.css";

//A map of page names to relative page paths
const pages = {
	"Home": "/",
	"Qualifications": "/Qualifications"
};
//A list of page names
const pageNames = Object.keys(pages);

/**
 * React component that represents a single item on the navbar
 */
function NavbarItem(props) {
	let style = { width: `${props.width}%` };
	if (props.isActive) {
		style = {
			...style,
			backgroundColor: "silver"
		}
	}
	return (<li className={"navbarItem"} style={style}><Link className={"navbarLink"} to={pages[props.currentPageName]}>{props.currentPageName}</Link></li>);
}

export default props => (
	<ul className={"navbar"}>{
		pageNames.map(pageName => {
			const currentRelativePath = window.location.href.replace(window.location.origin,"");
			const pageLocation = pages[pageName];
			return <NavbarItem isActive={currentRelativePath === pageLocation} width={100 / pageNames.length} currentPageName={pageName} />
		})
	}</ul>
)
