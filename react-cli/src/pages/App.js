import React, { Component } from 'react';
import './../asstes/index.css'

import logo from '../asstes/img/logo.svg';
import '../asstes/App.css';
import Comment from '../components/comment'

import { browserHistory } from 'react-router'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    // this.props.history.push("/state");
  }

  render() {
    function RouterList(props) {
      let numbers = [];
      let urlArr = [
        {url:"/event",name:'event'},
        {url:"/choose",name:'choose'},
        {url:"/list",name:'list'},
        {url:"/form",name:'form'},
        {url:"/state",name:'state'},
        {url:"/combination",name:'combination'}
      ]

      for (let i = 0; i < urlArr.length; i++) {
        numbers.push({
          id: i,
          url: urlArr[i].url,
          name: urlArr[i].name
        })
      }

      let list = numbers.map(item => <ListItem value={item.id} url={item.url} key={item.id} name={item.name}/>);
      return (
        <ul className='routerList'>{list}</ul>
      );
    }

    function ListItem(props) {
      return <li><Link to={props.url}>{props.name}</Link></li>;
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h2>Welcome to React</h2> */}
        </div>
        <p className="App-intro">
          {mockData.data.flow}
        </p>
        <Comment author={{ name: 'IronMan' }} text='Texting~~' date='1' counts='1'></Comment>
        <RouterList></RouterList>
      </div>
    );
  }
}

//不同于vue，react的js可以直接写在文件内
var Mock = require('mockjs')
var mockData = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "data": {
    'name|20': ["@cname(2,4)"],
    'flow|20': ["@integer(50, 100)"],
    'time|20': ['@date("HH:mm")']
  }
})

document.title = mockData.data.time[0]
export default App;
