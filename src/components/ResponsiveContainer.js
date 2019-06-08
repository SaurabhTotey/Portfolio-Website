import React from "react";
import "../styles/ResponsiveContainer.css";

/**
 * A class that represents a responsive container
 * Will hold elements horizontally unless screen width is small
 * If screen width is small, components will be held vertically
 */
class ResponsiveContainer extends React.Component {

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
		return <div className={"responsiveContainer"}>{
			this.props.children.map( child => {
				let span = child.props.responsiveWidth;
				if (this.state.isVertical) {
					span = 1;
				}
				return <div className={"responsiveContainerItem"} style={{gridArea: `span 1 / span ${span}`}}>{child}</div>
			})
		}</div>
	}

}

export default ResponsiveContainer
