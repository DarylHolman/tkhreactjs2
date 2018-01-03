import React, {Component} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {

	render() {
		return (
			<div className="header">
				<h1 className="title"><Link to="/">Address Book</Link></h1>
				<div className="subheader">
					<button className="add" onClick={this.props.handleAddEntryClick}> Add Entry</button>
				</div>
			</div>
		);
	}
}

export default Header;
