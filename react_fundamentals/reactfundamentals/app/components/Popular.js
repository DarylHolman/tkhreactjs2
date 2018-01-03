var React = require('react');
var Proptypes = require('prop-types');

function SelectLanguage (props) {
	 var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
	 	
	 	return(
		<ul className = 'languages'>
				{languages.map((lang) => {
					return (
						<li
							style = {lang === props.selectedLanguage ? {color: '#d0021b'}: null} 
							onClick = {props.onSelect.bind(null, lang)}
							key = {lang}>
							{lang}
						</li>
					)
				})}
			</ul>
		)
	}

SelectLanguage.propTypes = {
	selectedLanguage: Proptypes.string.isRequired,
	onSelect: Proptypes.func.isRequired,
}

class Popular extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			selectedLanguage: 'All'
		};

		this.updateLanguage = this.updateLanguage.bind(this);
	}
	
	updateLanguage (lang) {
		this.setState(() => {
			return {
				selectedLanguage: lang
			}
		});
	}

	render() {
		return (
			<div>
				<SelectLanguage
					selectedLanguage= {this.state.selectedLanguage}
					onSelect={this.updateLanguage} 
					/>
			</div>
		)
	}
}

module.exports = Popular;