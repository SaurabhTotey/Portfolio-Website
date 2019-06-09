import React from "react";

/**
 * A class that runs through a list of html components
 * Allows for user control, but also goes through each element on a timer
 * Similar to a slideshow
 */
class Carousel extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentItemIndex: 0
		};
	}

	componentDidMount() {
		this.carouselTimer = window.setInterval(() => this.setState({
			...this.state,
			currentItemIndex: (this.state.currentItemIndex + 1) % React.Children.toArray(this.props.children).length
		}), this.props.showTimeLength);
	}

	componentWillUnmount() {
		window.clearInterval(this.carouselTimer);
	}

	render() {
		return <div style={{textAlign: "center"}}>
			<h3>{this.props.title}</h3>
			{React.Children.toArray(this.props.children)[this.state.currentItemIndex]}
			<p style={{fontSize: "80%"}}>{this.props.description}</p>
		</div>
	}

}

export default Carousel
