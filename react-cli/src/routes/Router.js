import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import './../asstes/index.css';

import Bundle from './bundle';
import Loading from './../components/loading';

import App from './../pages/App';
import Events from './../pages/event';
import ChooseRender from './../pages/chooseRender';
import list from './../pages/list';
import form from './../pages/form'
import upstate from './../pages/upState'
import combination from './../pages/combination'

const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component {...props} /> : <Loading />
    }
  </Bundle>
);

const MainRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/event" component={Events} />
      <Route path="/choose" component={ChooseRender} />
      <Route path="/list" component={list} />
      <Route path="/form" component={form} />
      <Route path="/state" component={upstate} />
      <Route path="/combination" component={combination} />
    </Switch>
  </Router>
)

export default MainRouter 