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
		this.carouselTimer = window.setInterval(() => this.movePosition(1), this.props.showTimeLength);
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

	componentWillUnmount() {
		window.clearInterval(this.carouselTimer);
	}

	render() {
		return <div style={{textAlign: "center", minHeight: 600}}>
			<h3>{this.props.title}</h3>
			{React.Children.toArray(this.props.children)[this.state.currentItemIndex]}
			<p style={{fontSize: "80%"}}>{this.props.description}</p>
			<div style={{width: "100%"}}>
				<button style={{width: "50%"}} onClick={() => this.movePosition(-1)}>&#10094;</button>
				<button style={{width: "50%"}} onClick={() => this.movePosition(1)}>&#10095;</button>
			</div>
		</div>
	}

}

export default Carousel
