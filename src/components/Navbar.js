import React, {Component} from "react";
import { Link } from "gatsby";
import "../styles/Navbar.css";

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
	return (<li className={"navbarItem"} style={style}><Link className={"navbarLink"} to={props.currentItem.location}>{props.currentItem.name}</Link></li>);
}

/**
 * A bar that is used for navigation
 * Props must include a list of objects with page names and destinations and the current page
 */
class Navbar extends Component {

	render() {
		const pageNames = Object.keys(this.props.pages);
		return (
			<ul className={"navbar"}>{
				pageNames.map(pageName =>
					<NavbarItem isActive={this.props.currentPage === pageName} width={100 / pageNames.length} currentItem={{name: pageName, location: this.props.pages[pageName]}} />
				)
			}</ul>
		)
	}

}

export default Navbar;