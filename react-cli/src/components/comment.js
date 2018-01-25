import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      day : parseInt(props.date,10),
    }
  }

  componentDidMount() {
    // 组件已经安装完毕
    console.log('组件已经安装完毕')
    this.timer = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    // 组件将要被卸载
    console.log('组件将要被卸载')
    clearInterval(this.timer);
  }

  tick() {
    // 这是错误的
    // this.state.day = 'hello';
    // React可以将多个setState()用批处理为单个更新以实现较高的性能。
    // 因为this.props和this.state可能是异步更新的，你不应该依赖它们的值来计算下一个state。
    // 要解决它，应该使用回调函数而不是对象来调用setState()。 回调函数将接收先前的state作为第一个参数，并将应用更新时的props作为第二个参数：
    this.setState((prevState, props) => {
      return {
        day: prevState.day + parseInt(props.counts,10),
      };
    });

  }

  render() {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <div className="UserInfo-name">
            {this.props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {this.props.text}
        </div>
        <div className="Comment-date">
          {this.state.day}
        </div>
      </div>
    )
  }
}

export default Comment;