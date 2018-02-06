import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Home from './components/home';
import Detail from './components/detail'

//require the component forecast for our
///forecast/:city path 
import Forecast from './components/forecast';

// Importing React Router libraries
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path="/" component={App}>
  		<IndexRoute component={Home}/>

      <Route path="/forecast/:city" component={Forecast}/>

      <Route path="/detail/:city" component={Detail}/>

  	</Route>
  </Router>,
  document.getElementById('root')
);