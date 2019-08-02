import React from "react";
import "../styles/Carousel.css";

//A counter for carousels to determine a carousel's ID
export let carouselCounter = 0;

/**
 * A class that has a circular list of html components
 * Allows for user control but does NOT automatically go through elements with a timer
 * Similar to a slideshow
 * TODO: CSS transitions
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
		const makeCarouselControls = () => (
			<fieldset className={"carouselControlBox"} aria-label={"carousel controls"} aria-controls={id}>
				<button className={"carouselControl"} onClick={() => this.movePosition(-1)} aria-label={"previous"}>&#10094;</button>
				<button className={"carouselControl"} onClick={() => this.movePosition(1)} aria-label={"next"}>&#10095;</button>
			</fieldset>
		);
		return <div className={"carousel"} id={id} aria-live={"polite"}>
			<h3>{this.props.title}</h3>
			{makeCarouselControls()}
			<ul className={"carouselContent"}>{
				React.Children.toArray(this.props.children).map((child, index) => {
					const isActive = index === this.state.currentItemIndex;
					return <li aria-hidden={!isActive} className={isActive? "" : "hiddenCarouselItem"}>{child}</li>
				})
			}</ul>
			<div>
				<p className={"carouselDescription"}>{this.props.description}</p>
				{makeCarouselControls()}
			</div>
		</div>
	}

}

export default Carousel
