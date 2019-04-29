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
			currentItemIndex: 0,
			showTimeLength: this.props.showTimeLength | 5000
		};
	}

	componentDidMount() {
		this.numberOfChildren = React.Children.toArray(this.props.children).length;
		this.carouselTimer = window.setInterval(() => this.setState({
			...this.state,
			currentItemIndex: (this.state.currentItemIndex + 1) % this.numberOfChildren
		}), this.state.showTimeLength);
	}

	componentWillUnmount() {
		window.clearInterval(this.carouselTimer);
	}

	render() {
		return <div style={{textAlign: "center"}}>
			<h4>{this.props.title}</h4>
			{React.Children.toArray(this.props.children)[this.state.currentItemIndex]}
			<p>{this.props.description}</p>
		</div>
	}



}

export default Carousel
