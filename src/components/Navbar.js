import React from "react";
import "../styles/Navbar.css";
import Nav from "react-bootstrap/Nav";

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
	const location = pages[props.page];
	return <Nav.Item as={"li"}>
		<Nav.Link href={location}>
			{props.page}
		</Nav.Link>
	</Nav.Item>
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
		return <Nav justify={true} activeKey={this.state.currentRelativePath} as={"ul"}>{
			pageNames.map(pageName => <NavbarItem page={pageName}/>)
		}</Nav>
	}

}

export default Navbar
