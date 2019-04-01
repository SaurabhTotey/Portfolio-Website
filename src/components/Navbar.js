import React from "react";
import { Link } from "gatsby";
import "../styles/Navbar.css";

//A map of page names to relative page paths
const pages = {
	"Home": "/",
	"Qualifications": "/Qualifications",
	"Programming": "/Programming",
	"Music": "/Music",
	"3D Modelling": "/Modelling"
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

/**
 * React component that is a navbar
 * Handles setting navigation to all pages and figuring out current page
 */
class Navbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentRelativePath: null
		};
	}

	componentDidMount() {
		this.setState({ currentRelativePath: window.location.href.replace(window.location.origin,"") });
	}

	render() {
		return <ul className={"navbar"}>{
			pageNames.map(pageName => {
				const pageLocation = pages[pageName];
				return <NavbarItem isActive={this.state.currentRelativePath === pageLocation} width={100 / pageNames.length} currentPageName={pageName} />
			})
		}</ul>
	}

}

export default Navbar
