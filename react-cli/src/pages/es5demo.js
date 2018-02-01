import React, { Component } from 'react';

// 使用es5创建类
var Es5demo = React.createClass({
  getInitialState: function() {
    return {name: 'es5'};
  },
  //es6
  // constructor(props) {
  //   super(props);
  //   this.state = {name: 'es5'};
  // }
  render: function () {
    return <h1>hello {this.props.name}</h1>;
  }
});

Es5demo.defaultProps = {
  name: 'es5'
}

export default Es5demo;