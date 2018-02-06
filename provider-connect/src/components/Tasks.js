import React, {Component} from 'react'
import {connect} from 'react-redux'

export class Tasks extends Component {

	render() {
		console.log(this.props)
		const tasks = this.props.tasks.map((task, index)=> <li key={index}>{task}</li>)
		return(
			<div>	
				<ul>
					{tasks}
				</ul>

			</div>
			)
	}
}

const mapStateToProps = (state) => {
	return{
		tasks: state.tasks
	}
}

export default connect(mapStateToProps)(Tasks)