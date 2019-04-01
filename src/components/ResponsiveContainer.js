import React from "react";

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
		return <div style={{overflow: "hidden"}}>{
			this.props.children.map(child => {
				let style;
				if (this.state.isVertical) {
					style = { width: "100%", display: "block" };
				} else {
					style = { width: child.props.responsiveWidth, display: "inline-block" };
				}
				style = {
					...style,
					float: "left"
				};

				return <div style={style}>
					{child}
				</div>
			})}
			<div style={{clear: "both"}} />
		</div>
	}

}

export default ResponsiveContainer
