import React from "react";
import "../styles/Carousel.css";

/**
 * A class that has a circular list of html components
 * Allows for user control but does NOT automatically go through elements with a timer
 * Similar to a slideshow
 */
class Carousel extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentItemIndex: 0
		};
	}

	movePosition(amount) {
		this.setState({
			...this.state,
			currentItemIndex: this.state.currentItemIndex + amount
		});
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
		const numberChildren = React.Children.toArray(nextProps.children).length;
		let newPosition = nextState.currentItemIndex % numberChildren;
		if (newPosition < 0) {
			newPosition = numberChildren - 1;
		}
		if (nextState.currentItemIndex !== newPosition) {
			this.setState({
				...nextState,
				currentItemIndex: newPosition
			});
		}
	}

	render() {
		return <div className={"carousel"}>
			<h3 className={"carouselTitle"}>{this.props.title}</h3>
			{React.Children.toArray(this.props.children)[this.state.currentItemIndex]}
			<div>
				<p className={"carouselDescription"}>{this.props.description}</p>
				<div>
					<button className={"carouselControl"} onClick={() => this.movePosition(-1)}>&#10094;</button>
					<button className={"carouselControl"} onClick={() => this.movePosition(1)}>&#10095;</button>
				</div>
			</div>
		</div>
	}

}

export default Carousel
