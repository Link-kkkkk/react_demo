import React, { Component } from 'react';

// 使用es5创建类
var Es5demo = React.createClass({
  getInitialState: function () {
    return { name: 'es5' };
  },
  //es6
  // constructor(props) {
  //   super(props);
  //   this.state = {name: 'es5'};
  //   this.showName = this.showName.bind(this);  // es5时不需要绑定this
  // }
  render: function () {
    return <h1>hello {this.props.name}</h1>;
  }

  // ES6对mixins没有任何支持。 因此，在使用ES6的class编写React组件时，不支持mixins。

  // react其实并不强制使用jsx

  //   class Hello extends React.Component {
  //     render() {
  //         return <h1>hello zhangyatao</h1>;
  //     }
  // }
  // ReactDOM.render(<Hello />, document.getElementById('root'));
  //  上面的代码会编译成下面这样，其实可以使用js编写
  //   class Hello extends React.Component {
  //     render() {
  //         return React.createElement('h1', null, 'hello zhangyatao');
  //     }
  // }
  // ReactDOM.render(<Hello />, document.getElementById('root'));
});

Es5demo.defaultProps = {
  name: 'es5'
}

export default Es5demo;