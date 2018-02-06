import React from 'react'
import {Link} from 'react-router-dom'

class Input extends React.Component {
	constructor(){
		super()
		this.state ={
			input: '',
			name: '',
			number: '',
			address: '',
			contact: []
		}	
		this.saveAddress = this.saveAddress.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	componentDidMount() {
		if(this.props.location.state.contact!== undefined){
			this.setState({
    			contact: this.props.location.state.contact
    		})
		}
  	}
	saveAddress(event){
		event.preventDefault()

		var newContact = {
			name: this.state.name,
			number: this.state.number,
			address:this.state.address
		}
		console.log(newContact)
		this.setState({
			contact: this.state.contact.concat(newContact),
			input: '',
		})
	}
	handleChange(event){
		var target = event.target
		var value = target.value
		var name = target.name

		this.setState({
			[name]:value
		})
	}
	render(){
		console.log(this.state)
		return(
			<div>
				<form>
					<input placeholder="NAME" name="name"  onChange={this.handleChange}/>
					<input placeholder="NUMBER" name="number" onChange={this.handleChange}/>
					<input placeholder="ADDRESS" name="address" onChange={this.handleChange} />
					<button onClick={this.saveAddress}>SAVE!</button>
				</form>
				<Link to={{
					pathname:"/book",
					state: {contact: this.state.contact}
				}}>View Book</Link>
			</div>
			)
	}
}

export default Input