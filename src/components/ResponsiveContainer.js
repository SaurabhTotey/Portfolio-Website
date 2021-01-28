import React from "react";
import "../styles/ResponsiveContainer.css";

/**
 * A component that represents a responsive container
 * Will hold elements horizontally unless screen width is small
 * If screen width is small, components will be held vertically
 * Expects a 'responsiveWidths' prop: is a list with as many entries as children
 * Each element of responsiveWidths must correspond to how large its corresponding child is in a row of 12 columns
 * Consequently, the sum of all elements in responsiveWidths should be 12
 */
class ResponsiveContainer extends React.Component {
	constructor(props) {
		console.assert(
			props.responsiveWidths &&
				React.Children.count(props.children) === props.responsiveWidths.length &&
				props.responsiveWidths.reduce((acc, val) => acc + val, 0) === 12,
		);
		super(props);
	}

	render() {
		return (
			<div className={"responsiveContainer"}>
				{this.props.children.map((child, index) => (
					<div
						className={"responsiveContainerItem"}
						style={{ "--responsive-width": this.props.responsiveWidths[index] }}
						key={index}
					>
						{child}
					</div>
				))}
			</div>
		);
	}
}

export default ResponsiveContainer;
