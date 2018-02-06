import React, { Component } from 'react';
import './App.css';
import UserInput from "./components/UserInput"
import Tasks from "./components/Tasks"

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />

        <Tasks />
      </div>
    );
  }
}

export default App;
