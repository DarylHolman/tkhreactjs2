 import React from 'react';
import Info from './info'
import {Link} from 'react-router-dom'

class Book extends React.Component {

	constructor(){
		super();
		this.state={
			contact:[]
		}

	}
	componentDidMount() {
    	this.setState({
    		contact: this.props.location.state.contact
    	})
  	}

	handleDelete(event){
		this.setState({
			contact: this.state.contact.filter( (i)=>i !== event )
		})
	}
	render(){
		console.log(this.state)
			const info = this.state.contact.map((item, index)=><Info key={index} name={item.name} number={item.number} address={item.address}/>)
		
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className='col-md-3'>
							Name
						</div>
						<div className='col-md-3'>
							Number
						</div>
						<div className='col-md-3'>
							Address
						</div>
					</div>
				</div>
				{info}
				<br/>
				<Link to={{
					pathname:"/",
					state: {contact: this.state.contact}
				}}>Add more contacts</Link>
			</div>

			
			)
	}
}

export default Book