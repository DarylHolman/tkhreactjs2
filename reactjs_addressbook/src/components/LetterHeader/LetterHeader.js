import React, { Component } from 'react';
import './LetterHeader.css';

class LetterHeader extends Component {

	render() {
		return (
			<div className="letter-header">
				<span className="letter-header-content"> {this.props.letter} </span>
			</div>
		);
	}
}

export default LetterHeader;