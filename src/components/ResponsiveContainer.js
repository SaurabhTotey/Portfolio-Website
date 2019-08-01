import React from "react";
import "../styles/ResponsiveContainer.css";

/**
 * A component that represents a responsive container
 * Will hold elements horizontally unless screen width is small
 * If screen width is small, components will be held vertically
 * Requires all children to define their 'responsiveWidth' prop
 * responsiveWidth determines how much space a child takes up horizontally on large screens
 * responsiveWidths of all children must add up to 12
 */
export default props => (
	<div className={"responsiveContainer"}>{
		props.children.map((child, index) => <div className={"responsiveContainerItem"} style={{"--responsive-width": child.props.responsiveWidth}} key={index}>{child}</div>)
	}</div>
)
