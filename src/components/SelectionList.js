import React from "react";

/**
 * A class that shows a list of items that can be selected
 * Is vertical and can have listeners attached
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
		return <ul>

		</ul>
	}

}

export default SelectionList;
