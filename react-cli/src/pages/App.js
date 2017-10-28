import React, { Component } from 'react';
import common from './common';
import logo from '../asstes/img/logo.svg';
import '../asstes/App.css';
import Comment from '../components/comment'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h2>Welcome to React</h2> */}
        </div>
        <p className="App-intro">
          { mockData.data.flow }
        </p>
        <Comment author={{name:'IronMan'}} text='Texting~~' date='1' counts='1'></Comment>
      </div>
    );
  }
}

//不同于vue，react的js可以直接写在文件内
var Mock = require('mockjs')
var mockData = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "data": {
    'name|20' : ["@cname(2,4)"],
    'flow|20' : ["@integer(50, 100)"],
    'time|20' : ['@date("HH:mm")']
  }
})

document.title = mockData.data.time[0]
export default App;
