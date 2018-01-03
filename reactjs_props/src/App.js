// Notice that below, I did not include , {Component} after import
// React
import React from 'react';

// we're importing the component from Todo.js
import Todo from './Todo';


class App extends React.Component {

// Establish a function that we are going to be passing
// into the Todo Component. 
  fun(e){
    alert("We're about to get White Castle");
  }

  render() {

    return (
      <div>
        <Todo name="Pick up My cousins kids"
              age="24" data={data}
              alert={this.fun} />
      </div>
    );
  }
}

// inputting an object.
const data = {'todo': [1,2,3,4]}

// passing an array
// const data = [1,2,3,4]

// passing a number
// const data = 4

// inserting objects within an array
// App.defaultProps=[{
//   name: "whatever",
//   age: 24,
//   single: true
//
// }]

// Just an object with properties
// App.defaultProps={
//   name: "whatever",
//   age: 24,
//   single: true
//
// }

// Passing an object with one key and two elements in an array
App.defaultProps={

  "status": [{
  name: "whatever",
  age: 24,
  single: true
  },
  {
    name: "whomever",
    age: 99,
    single: false
  }]


}

export default App;
