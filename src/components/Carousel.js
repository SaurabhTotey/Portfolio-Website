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
		this.oldItemIndex = null;
		this.changeDirection = null;
	}

	movePosition(amount) {
		this.oldItemIndex = this.state.currentItemIndex;
		this.changeDirection = amount > 0? "rtl" : "ltr";
		this.setState({
			...this.state,
			currentItemIndex: this.state.currentItemIndex + amount
		});
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
		const numberChildren = React.Children.toArray(nextProps.children).length;
		if (nextProps.children !== this.props.children) {
			this.changeDirection = null;
			this.oldItemIndex = null;
		}
		let newPosition = nextState.currentItemIndex % numberChildren;
		while (newPosition < 0) {
			newPosition += numberChildren;
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
					let className = this.state.currentItemIndex === index? "" : "hiddenCarouselItem";
					let style = {};
					if (this.changeDirection !== null && [this.state.currentItemIndex, this.oldItemIndex].includes(index)) {
						className = "animation";
						if (index === this.state.currentItemIndex) {
							style["--animation-name"] = "enter" + (this.changeDirection === "rtl"? "Right" : "Left");
						} else {
							style["--animation-name"] = "exit" + (this.changeDirection === "rtl"? "Left" : "Right");
						}
					}
					return <li aria-hidden={index !== this.state.currentItemIndex} className={className} style={style}>{child}</li>
				})
			}</ul>
			{makeCarouselControls()}
		</div>
	}

}

export default Carousel
