import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Book from "./book"
import Input from "./input"

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <div>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">My Address Book</h1>
              
            </header>
          </div>
            <Route exact path="/" component={Input}/>
            <Route exact path="/book" component={Book}/>
        </div>
        </Router>
      </div>
      
    );
  }
}

export default App;
