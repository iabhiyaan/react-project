import React from "react";

import "./InlineSearch.scss";

class InlineSearch extends React.Component {
	handleChange = () => {
		this.props.onUserInput(this.refs.filterTextInput.value);
	};
	render() {
		return (
			<div className="form-group has-search">
				<span className="fa fa-search form-control-feedback" />
				<input
					type="text"
					placeholder="Search..."
					value={this.props.filterText}
					ref="filterTextInput"
					onChange={this.handleChange}
					className="form-control"
				/>
			</div>
		);
	}
}
export default InlineSearch;
