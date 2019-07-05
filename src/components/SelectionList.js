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
			items: this.props.items,
			selectedItemIndex: this.props.selectedItemIndex | 0
		};
	}

	onSelection() {
		this.props.onSelection(this.state.items[this.state.selectedItemIndex]);
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
		return <nav role={"navigation"} aria-label={this.props.ariaLabel}>
			<ul className={"selectionList"}>{
				this.state.items.map((item, index) => <li className={"selectionListItem"} key={item}><button className={`selectionItem ${index === this.state.selectedItemIndex? "active" : ""}`} onClick={() => this.setState({ ...this.state, selectedItemIndex: index })}>{item}</button></li>)
			}</ul>
		</nav>
	}

}

export default SelectionList
