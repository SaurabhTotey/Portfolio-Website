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
		this.oldItemIndex = null;
	}

	movePosition(amount) {
		this.oldItemIndex = this.state.currentItemIndex;
		this.setState({
			...this.state,
			currentItemIndex: this.state.currentItemIndex + amount
		});
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		const numberChildren = React.Children.toArray(this.props.children).length;
		if (this.props.children !== prevProps.children) {
			this.oldItemIndex = null;
		}
		let newPosition = this.state.currentItemIndex % numberChildren;
		while (newPosition < 0) {
			newPosition += numberChildren;
		}
		if (this.state.currentItemIndex !== newPosition) {
			this.setState({
				...this.state,
				currentItemIndex: newPosition
			});
		}
	}

	render() {
		const id = `carousel${this.props.title}`;
		const makeCarouselControls = () => (
			<fieldset className={"carouselControlBox"} aria-label={"carousel controls"} aria-controls={id}>
				<button className={"carouselControl"} onClick={() => this.movePosition(-1)} aria-label={"previous"}>&#10094;</button>
				<button className={"carouselControl"} onClick={() => this.movePosition(1)} aria-label={"next"}>&#10095;</button>
			</fieldset>
		);
		return <div className={"carousel"} id={id} aria-live={"polite"}>
			<h3>{this.props.title}</h3>
			{makeCarouselControls()}
			<ul className={"carouselContentList"}>{
				React.Children.toArray(this.props.children).map((child, index) => {
					let childContainerClassName = this.state.currentItemIndex === index ? "" : "hidden";
					let style = {};
					if (this.oldItemIndex !== null && [this.state.currentItemIndex, this.oldItemIndex].includes(index)) {
						childContainerClassName = "animation";
						style["--animation-name"] = index === this.state.currentItemIndex ? "enter" : "exit";
					}
					return <li aria-hidden={index !== this.state.currentItemIndex} className={"carouselItem"} key={index}>
						<div className={childContainerClassName} style={style}>{child}</div>
					</li>
				})
			}</ul>
			{makeCarouselControls()}
		</div>
	}

}

export default Carousel
