// Notice that below, I did not include , {Component} after import
// React
import React from 'react';
import Todo from './Todo';


class App extends React.Component {


  constructor(){
    super();

    this.state={
      tasks: ["first", "second", "third"],
      input: ''
    }
    // manualling bind your functions here
    this.handleSubmit =this.handleSubmit.bind(this)
    this.handleChange =this.handleChange.bind(this)
    this.handleDelete =this.handleDelete.bind(this)
    this.handleUpdate =this.handleUpdate.bind(this)
  }


  handleSubmit(e){
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat([this.state.input]),
      input: '',
    })

  }

  handleUpdate(change){
    this.setState({
      tasks:this.state.tasks.map(task=> task ===change[0]?
        change[1] :
        task)
    })
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      input: e.target.value
    })

  }

  handleDelete(e){
    this.setState({
      tasks: this.state.tasks.filter( (task)=> task !== e)
    })
  }

  render() {

    let tasks = this.state.tasks.map((task)=>
      // Change this passed in function
      <Todo task={task} del={ this.handleDelete } up={(e)=>this.handleUpdate(e)}/>
    )

    return (
      <div>
      {/*Change this passed in function */}
        <form onSubmit={ this.handleSubmit }>

          <input onChange={ this.handleChange } />
          <input type="submit"/>
        </form>

        { tasks }

      </div>
    );
  }
}



export default App;