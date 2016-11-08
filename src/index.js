import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home'
import Who from './components/Who'
import Contact from './components/Contact'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute key="test" component={Home}/>
      <Route path='/who' component={Who} />
      <Route path='contact' component={Contact} />
    </Route>
  </Router>
), document.getElementById('root'))
