import React, {Component} from "react";

/**
 * CSS styling for the ul list component
 */
const listStyle = {
	listStyleType: "none",
	margin: 0,
	padding: 0,
	overflow: "hidden",
	position: "sticky",
	top: 0
};

/**
 * CSS styling for all li components
 */
const itemStyle = {
	float: "left",
	display: "block",
	textAlign: "center"
};

/**
 * CSS styling for the li component that represents the current page
 */
const currentItemStyle = {
	...itemStyle,
	...{
		backgroundColor: "gray"
	}
};

/**
 * React component that represents a single item on the navbar
 */
function NavbarItem(props) {
	return (<li style={props.isActive? currentItemStyle : itemStyle}>{props.currentItem}</li>);
}

/**
 * A bar that is used for navigation
 * Props must include a list of objects with page names and destinations and the current page
 */
class Navbar extends Component {

	render() {
		return (
			<ul style={listStyle}>{
				this.props.pages.map(pageName => <NavbarItem isActive={this.props.currentPage === pageName} currentItem={pageName} />)
			}</ul>
		)
	}

}

export default Navbar;