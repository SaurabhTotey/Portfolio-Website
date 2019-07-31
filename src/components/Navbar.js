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
	return <li className={"navbarItem" + (props.isActive? " active" : "")}><Link className={"navbarLink"} to={pages[props.currentPageName]}>{props.currentPageName}</Link></li>;
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
		return <nav role={"navigation"} aria-label={"Page Navigation"}>
			<ul id={"navbar"}>{
				pageNames.map(pageName => <NavbarItem isActive={this.state.currentRelativePath === pages[pageName]} currentPageName={pageName} key={pageName} />)
			}</ul>
		</nav>
	}

}

export default Navbar
