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
import list from './pages/list';
import form from './pages/form'

const MainRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/event" component={Events}/>
      <Route path="/choose" component={ChooseRender}/>
      <Route path="/list" component={list}/>
      <Route path="/form" component={form}/>
    </div>
  </Router>
)

export default MainRouter 