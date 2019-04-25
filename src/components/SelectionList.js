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
			selectedItemIndex: this.props.selectedItemIndex ? this.props.selectedItemIndex : 0
		};
	}

	render() {
		return <ul className={"selectionList"}>{
			this.state.items.map(item => <li className={"selectionItem"}>{item}</li>)
		}</ul>
	}

}

export default SelectionList;
