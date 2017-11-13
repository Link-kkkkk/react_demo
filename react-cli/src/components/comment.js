import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      day: parseInt(props.date)
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
    // this.state.day = 'hello'; 这是错误的
    // React可以将多个setState()用批处理为单个更新以实现较高的性能。
    // 因为this.props和this.state可能是异步更新的，你不应该依赖它们的值来计算下一个state。
    // 要解决它，应该使用回调函数而不是对象来调用setState()。 回调函数将接收先前的state作为第一个参数，并将应用更新时的props作为第二个参数：
    this.setState((prevState, props) => {
      return {
        day: prevState.day + parseInt(props.counts)
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

        <a onClick={this.activeLink} href='http://www.baidu.com'>click me to location href</a>
      </div>
    )
  }

  activeLink(e) {
    e.preventDefault();
    console.log('The Button was clicked');
    console.log('preventDefault会阻止标签的默认行为所以不会跳转')
  }
}

export default Comment;