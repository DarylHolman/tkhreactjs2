import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Entry.css';

class Entry extends Component {

	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.handleClosedEntryClick(this.props.idx);
	}
	
	render(){
		if (this.props.expanded) {
			return (
				<div className="entry expanded">
						<div className="entry-content">
							<ul className="entry-ul">
								<li className="entry-li">
									<span> {this.props.entryData.fname} </span>
									<strong> {this.props.entryData.lname} </strong>
								</li>
								<li className={"entry-li"}>
									<span className="entrylabel"> phone: </span>
									<strong>{this.props.entryData.phone}</strong>
								</li>
								<li className="entry-li">
									<span className="entrylabel"> email: </span>
									<strong>{this.props.entryData.email}</strong>
								</li>
								<li className="entry-li noborder">
									<span className="entrylabel"> address: </span>
									<strong>{this.props.entryData.address}</strong>
								</li>
							</ul>
							<div className="button-container">	
								<button className="entrybutton back" onClick={this.props.handleBack}>Back</button>
								<Link to="/edit"><button className="entrybutton edit" onClick={this.props.handleEdit}>Edit</button></Link>		
								<button className="entrybutton delete" onClick={this.props.handleDelete}>Delete</button>
							</div>
						</div>
				</div>
			);
		} else {
			return (
				<div className="entry" onClick={this.handleClick}>
					<div className="entry-content">
						<span> {this.props.entryData.fname} </span>
						<strong> {this.props.entryData.lname} </strong>
					</div>
				</div>
			);
		}
	}
}

export default Entry;