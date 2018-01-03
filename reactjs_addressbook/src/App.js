import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from './components/Header/Header.js';
import EntryList from './components/EntryList/EntryList.js';
import EntryForm from './components/EntryForm/EntryForm.js';


import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			width: 0,
			contentToRender: "entrylist",
			entryDataArray: [
				{
					idx: this.generateId(),
					entryData: {
						fname: "John",
						lname: "Doe",
						phone: "(012)345-6789",
						email: "jdoe@gmail.com",
						address: "555 Smith Street",
					},
				},
			],
			expandedEntryId: "",
			formData: {
				fname: "",
				lname: "",
				phone: "",
				email: "",
				address: "",
			},
			formHeader: "New Entry",
			lastId: 0,
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.handleEdit=this.handleEdit.bind(this);
		this.getEntryById=this.getEntryById.bind(this);
		this.renderEntryList=this.renderEntryList.bind(this);
		this.renderEntryForm=this.renderEntryForm.bind(this);
	}

	handleEdit(event) {
		var entryToEdit = this.state.entryDataArray.find((element) => {return element.idx===this.state.expandedEntryId});
		var dataOfEntryToEdit = entryToEdit.entryData;
		this.setState({
			formData: dataOfEntryToEdit,
			formHeader: "Edit Entry",
			contentToRender: "form",
		});
		this.props.history.replace("/addressbook/edit");
		event.preventDefault();
	}

	getEntryById(idOfEntryToFind) {
		return this.state.entryDataArray.find((element) => {return element.idx===idOfEntryToFind});
	}

	generateId() {
		var uuidv1 = require('uuid/v1');
		return uuidv1();
	}

	handleSave(event) {
		if (this.state.formHeader==="New Entry") {
			this.setState({
				entryDataArray: this.state.entryDataArray.concat(
					{
						idx: this.generateId(),
						entryData: this.state.formData,
					}
				),
				lastId: this.state.lastId+1,
			});
		} else {
			var entryToEdit = this.getEntryById(this.state.expandedEntryId);
			var entryDataArrayToEdit = this.state.entryDataArray;
			entryToEdit.entryData = this.state.formData;
			entryDataArrayToEdit.entryToEdit = entryToEdit;
			this.setState({
				entryDataArray: entryDataArrayToEdit,
			});
		}
		this.setState({
			formData: {
				fname: "",
				lname: "",
				phone: "",
				email: "",
				address: "",
			},
			contentToRender: "entrylist",
			expandedEntryId: "",
		});
		this.props.history.replace("/addressbook/home");
		event.preventDefault();
	}

	handleCancel(event) {
		this.setState({
			formData: {
				fname: "",
				lname: "",
				phone: "",
				email: "",
				address: "",
			},
			contentToRender: "entrylist",
		});
		this.props.history.replace("/addressbook/home");
		event.preventDefault();
	}

	handleInputChange(event) {
		var newFormData = this.state.formData;
		newFormData[event.target.name] = event.target.value;
		this.setState({
			formData: newFormData,
		});
		event.preventDefault();
	}

	handleBack(event) {
		this.setState({
			expandedEntryId: "",
			contentToRender: "entrylist",
		})
		event.preventDefault();
	}

	handleDelete(event) {
		this.setState({
			entryDataArray: this.state.entryDataArray.filter((element) => {return element.idx!==this.state.expandedEntryId}),
			contentToRender: "entrylist",
			expandedEntryId: "",
		});
		event.preventDefault();
	}

	handleAddEntryClick(event) {
		console.log("this.handleAddEntryClick fired");
		this.props.history.replace({pathname: 'addressbook/new'});
		this.setState({
			formHeader: "New Entry",
			contentToRender: "form",
		});
		event.preventDefault();
	}

	handleClosedEntryClick(idx) {
		this.setState({expandedEntryId: idx});
	}

	componentDidMount() {
			this.updateWindowDimensions();
			window.addEventListener('resize', this.updateWindowDimensions);
	}
	componentWillUnmount() {
			window.removeEventListener('resize', this.updateWindowDimensions);
	}
	updateWindowDimensions() {
			this.setState({width: window.innerWidth});
	}

	renderHeader() {
		return (
			<Header handleAddEntryClick={this.handleAddEntryClick.bind(this)}/>
		);
	}

	renderEntryList() {
		return (
			<div>
				<EntryList
					getEntryById={this.getEntryById}
					entryDataArray={this.state.entryDataArray}
					expandedEntryId={this.state.expandedEntryId}
					handleBack={this.handleBack.bind(this)}
					handleEdit={this.handleEdit}
					handleDelete={this.handleDelete.bind(this)}
					handleClosedEntryClick={this.handleClosedEntryClick.bind(this)} />
			</div>
		);
	}

	renderEntryForm() {
		return (
			<EntryForm
				formData={this.state.formData}
				formHeader={this.state.formHeader}
				handleCancel={this.handleCancel.bind(this)}
				handleSave={this.handleSave.bind(this)}
				handleInputChange={this.handleInputChange.bind(this)} />
		);
	}

	render() {
		return (
			<div>
				{this.renderHeader()}
				<Route exact path="/addressbook/index.html" render = {this.renderEntryList}/>
				<Route path="/addressbook/home" render = {this.renderEntryList}/>
				<Route path="/addressbook/new" render = {this.renderEntryForm}/>
				<Route path="/addressbook/edit" render = {this.renderEntryForm}/>
			</div>
		);
	}
}

export default withRouter(App);
