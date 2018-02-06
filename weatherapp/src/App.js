import React, { Component } from 'react';
import './App.css';

import MyNavbar from "./components/MyNavBar"


class App extends Component {
  render() {
    return (
      <div> 
        <MyNavbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
