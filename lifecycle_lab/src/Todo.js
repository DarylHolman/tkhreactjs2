import React from 'react';



class Todo extends React.Component{
  constructor(){
    super();
    this.state={
      complete: false,
      newInput: "",
      showUpdateField: false
    }
    // manualling bind your functions here
    this.handleClick = this.handleClick.bind(this)
    this.handleDeleteClick =this.handleDeleteClick.bind(this)
    this.handleUpdateClick = this.handleUpdateClick.bind(this)
    this.updateInput = this.updateInput.bind(this)
  }


  handleClick(e){
    e.preventDefault();
    if(this.state.complete == true){
      this.setState({
        complete: false
      })
    }else{
      this.setState({
      complete: true
    })
    }
  }
   



// Don't worry about the code below.
// There was a bug in the app where if you click complete on a task and then
// delete the task, the following task was marked complete.
// This function below prevents that behaviour from happenning.
// to learn more about how this method works below, check out react lifecycles.
// Docs-----
// https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops
componentWillReceiveProps(nextProps){
  console.log('d')
  if(nextProps !== this.props){
    this.setState({
      complete: false
    })
  }
}
handleDeleteClick(){
  this.props.del(this.props.task)
}
updateInput(e){
    e.preventDefault()
    this.setState({
      newInput: e.target.value
    })
  }
handleUpdateClick(e){
  e.preventDefault()
  this.props.up([this.props.task, this.state.newInput]);
    this.setState({
      showUpdateField: false
    })
  }

shouldComponentUpdate(nextProps, nextState){
  console.log('a')
  return true
}
componentWillUpdate(nextProps, nextStatet){
  console.log('b')
}
componentDidUpdate(prevProps, prevState){
  console.log('c')
}
componentWillMount(){
  console.log('e')
}
componentDidMount(){
  console.log('f')
}

render(){
  return(
    !this.state.complete ?

    <div>
      <li>{this.props.task}
      {/* change  the below code from a function to a variable */}

        <button onClick={ (event)=> this.handleClick(event) }>complete</button>
       {this.state.showUpdateField ?
          <button onClick={this.handleUpdateClick}>Done updating</button> :
          <button onClick={ ()=> this.setState({ showUpdateField: true }) }>
          Update</button>
        }
        {this.state.showUpdateField ?
          <form onSubmit={ this.handleUpdateClick }>
          <input placeholder={this.props.task} onChange={ this.updateInput }/>
          </form>
          :
          ""
        }
      </li>
      <br></br>
      mission not complete
    </div>
    :
    <div>
      <li>{this.props.task}
      {/* change  the below code from a function to a variable */}
        <button onClick={ this.handleDeleteClick }>Delete</button>
        <button onClick={(event)=> this.handleClick(event)} >incomplete</button>

      </li>
      <br></br>
      mission complete
    </div>
    )
  }
}



export default Todo;