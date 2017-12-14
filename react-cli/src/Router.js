import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './asstes/index.css';

import App from './pages/App';
import Events from './pages/event';
import ChooseRender from './pages/chooseRender';

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/event" component={Events}/>
      <Route path="/choose" component={ChooseRender}/>
    </div>
  </Router>
)

export default BasicExample 