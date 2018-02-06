import React, { Component } from "react";
import {connect} from 'react-redux'


class UserInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      task: ''
    };
  }

  handleChange(event) {
    this.setState({
      task: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.dispatch({
      type: "ADD_TASK",
      task: this.state.task
    })
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
      <p>
        <input
          type="text"
          onChange={(event) => this.handleChange(event)}
          placeholder="enter name"/>
      </p>

        <input type="submit" />
      </form>
    )
  }
}

export default connect(undefined)(UserInput)