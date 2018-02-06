import React from 'react'

class Info extends React.Component{
	render(){
		console.log(this.props)
		return(
			<div className="row">
				<div className="col-md-3">
					<h3 className="info">{this.props.name}</h3>
				</div>
				<div className="col-md-3">
					<h3 className="info">{this.props.number}</h3>
				</div>
				<div className="col-md-3">
					<h3 className="info">{this.props.address}</h3>
				</div>
				<div>
					<button onClick={this.props.del}>Delete</button>
				</div>
			</div>
		)
	}
}
export default Info