import React from "react";
import "../styles/Carousel.css";

//A counter for carousels to determine a carousel's ID
export let carouselCounter = 0;

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
		this.carouselNumber = carouselCounter;
		carouselCounter++;
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
		const id = `carousel${this.carouselNumber}`;
		return <div className={"carousel"} id={id} aria-live={"polite"}>
			<h3 className={"carouselTitle"}>{this.props.title}</h3>
			{React.Children.toArray(this.props.children)[this.state.currentItemIndex]}
			<div>
				<p className={"carouselDescription"}>{this.props.description}</p>
				<fieldset className={"carouselControlBox"} aria-label={"carousel controls"} aria-controls={id}>
					<button className={"carouselControl"} onClick={() => this.movePosition(-1)} aria-label={"previous"}>&#10094;</button>
					<button className={"carouselControl"} onClick={() => this.movePosition(1)} aria-label={"next"}>&#10095;</button>
				</fieldset>
			</div>
		</div>
	}

}

export default Carousel
