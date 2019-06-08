import React from "react";

/**
 * A class that represents a responsive container
 * Will hold elements horizontally unless screen width is small
 * If screen width is small, components will be held vertically
 * Requires all children to define their 'responsiveWidth' prop
 * responsiveWidth determines how much space a child takes up horizontally on large screens
 * responsiveWidths of all children must add up to 12
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
		const containerStyling = { display: "grid", gridTemplateColumns: "100%" };
		if (!this.state.isVertical) {
			const columnWidth = `${100 / 12}% `;
			containerStyling.gridTemplateColumns = "";
			for (let i = 0; i < 12; i++) {
				containerStyling.gridTemplateColumns += columnWidth;
			}
		}
		return <div style={containerStyling}>{
			this.props.children.map( child => {
				const itemStyling = { placeSelf: "stretch", gridArea: "span 1 / span 1" };
				if (!this.state.isVertical) {
					itemStyling.gridArea = `span 1 / span ${child.props.responsiveWidth}`;
				}
				return <div style={itemStyling}>{child}</div>
			})
		}</div>
	}

}

export default ResponsiveContainer
