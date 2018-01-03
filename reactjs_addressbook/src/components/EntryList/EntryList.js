import React, { Component } from 'react';
import Entry from '../Entry/Entry.js';
import LetterHeader from '../LetterHeader/LetterHeader.js';
import './EntryList.css';

class EntryList extends Component {

	compareEntryNames(entry1,entry2) {
		var lastNameComparison = entry1.entryData.lname.localeCompare(entry2.entryData.lname);
		if (lastNameComparison===0) {
			return entry1.entryData.fname.localeCompare(entry2.entryData.fname);
		} else {
			return lastNameComparison;
		}
	}

	sortEntriesAlphabetically(entryDataArray) {
		return entryDataArray.sort((entry1,entry2)=> this.compareEntryNames(entry1,entry2))
	}

	getFirstLetterOfLastName(entry) {
		return entry.entryData.lname.charAt(0).toUpperCase();
	}

	renderEntriesAndLetterHeaders() {
		var sortedEntryDataArray = this.sortEntriesAlphabetically(this.props.entryDataArray);
		var mostRecentLetter = "";
		return sortedEntryDataArray.map((entry) => {
			if (this.getFirstLetterOfLastName(entry)!==mostRecentLetter) {
				mostRecentLetter=this.getFirstLetterOfLastName(entry);
				return (
					<div key={entry.idx}>
						<LetterHeader letter={this.getFirstLetterOfLastName(entry)} />
						<Entry
							idx={entry.idx}
							expanded={false}
							handleClosedEntryClick={this.props.handleClosedEntryClick}
							entryData={entry.entryData} />
					</div>
				);
			} else {
				return (
					<Entry
						idx={entry.idx}
						key={entry.idx}
						expanded={false}
						handleClosedEntryClick={this.props.handleClosedEntryClick}
						entryData={entry.entryData} />
				);
			}	
		});
	}

	renderOnlySelectedEntry() {
		var dataOfExpandedEntry = this.props.getEntryById(this.props.expandedEntryId).entryData;
		return (
			<Entry
				expanded={true}
				entryData={dataOfExpandedEntry} 
				handleBack={this.props.handleBack}
				handleEdit={this.props.handleEdit}
				handleDelete={this.props.handleDelete} />
		);
	}

	render() {
		if (this.props.expandedEntryId!=="") {
			return (
				<div className="entrylist">
					{this.renderOnlySelectedEntry()}
				</div>
			);
		} else {
			return (
				<div className="entrylist">
					{this.renderEntriesAndLetterHeaders()}
				</div>
			);
		}
	}
}

export default EntryList;