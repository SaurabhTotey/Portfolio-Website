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
class NavbarItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isVertical: false
		};
	}

	onWindowResize() {
		this.setState({ isVertical: window.innerWidth < 900 });
	}

	componentDidMount() {
		this.onWindowResize();
		window.addEventListener("resize", this.onWindowResize.bind(this));
	}

	render() {
		let style;
		if (this.state.isVertical) {
			style = { width: "100%", margin: "auto" };
		} else {
			style = { width: `${this.props.width}%`, float: "left" };
		}

		if (this.props.isActive) {
			style = {
				...style,
				backgroundColor: "lightgray"
			}
		}

		return (<li className={"navbarItem"} style={style}><Link className={"navbarLink"} to={pages[this.props.currentPageName]}>{this.props.currentPageName}</Link></li>);
	}

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
				pageNames.map(pageName => {
					const pageLocation = pages[pageName];
					return <NavbarItem isActive={this.state.currentRelativePath === pageLocation} width={100 / pageNames.length} currentPageName={pageName} />
				})
			}</ul>
		</nav>
	}

}

export default Navbar
