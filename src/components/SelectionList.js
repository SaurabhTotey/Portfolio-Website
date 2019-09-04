import React from "react";
import "../styles/SelectionList.css"

/**
 * A class that shows a list of items that can be selected
 * Is vertical and can have listeners attached
 * Requires that an item is always selected
 */
class SelectionList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedItemIndex: this.props.selectedItemIndex | 0
		};
	}

	onSelection() {
		this.props.onSelection(this.props.items[this.state.selectedItemIndex]);
	}

	componentDidMount() {
		this.onSelection();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState.selectedItemIndex === this.state.selectedItemIndex) {
			return;
		}
		this.onSelection();
	}

	render() {
		return <nav role={"menu"} aria-label={this.props.ariaLabel} aria-controls={this.props.ariaControls}>
			<ul className={"selectionList"}>{
				this.props.items.map((item, index) => <li className={"selectionListItem"} key={item} role={"menuitemradio"} aria-checked={index === this.state.selectedItemIndex}><button className={`selectionItem ${index === this.state.selectedItemIndex? "active" : ""}`} onClick={() => this.setState({ selectedItemIndex: index })}>{item}</button></li>)
			}</ul>
		</nav>
	}

}

export default SelectionList
