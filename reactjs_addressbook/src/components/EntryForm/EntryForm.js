import React, {Component} from 'react';
import './EntryForm.css';

class EntryForm extends Component {

	render() {
		return (
			<div className="entry-form-container">
				<h2>
					{this.props.formHeader}
				</h2>
				<form className="entry-form">
					<span className="entrylabel"> First Name </span>
					<input name="fname" value={this.props.formData.fname} className="inputfield" type="text" onChange={this.props.handleInputChange}/>
					<span className="entrylabel"> Last Name </span>
					<input name="lname" value={this.props.formData.lname} className="inputfield" type="text" onChange={this.props.handleInputChange}/>
					<span className="entrylabel"> Phone </span>
					<input name="phone" value={this.props.formData.phone} className="inputfield" type="text" onChange={this.props.handleInputChange}/>
					<span className="entrylabel"> Email </span>
					<input name="email" value={this.props.formData.email} className="inputfield" type="text" onChange={this.props.handleInputChange}/>
					<span className="entrylabel"> Address </span>
					<input name="address" value={this.props.formData.address} className="inputfield" type="text" onChange={this.props.handleInputChange}/>
					<div className="button-container">
						<button className="entrybutton submit" type="submit" onClick={this.props.handleSave}>Save</button>
						<button className="entrybutton" type="reset" onClick={this.props.handleCancel}>Cancel</button>
					</div>
				</form>
			</div>
		);
	}
}

export default EntryForm;