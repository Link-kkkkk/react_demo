import React, { Component } from 'react';

// 当组件插入dom时会依次执行一下方法
// constructor()
// componentWillMount()
// render()
// componentDidMount()
// 更新状态时
// componentWillReceiveProps()
// shouldComponentUpdate()
// componentWillUpdate()
// render()
// componentDidUpdate()
// 卸载时
// componentWillUnmount()
class Life extends Component {
  constructor(props) {
    // 通常来说super(props)一般要放在第一句，不然一个this.porps就报错了
    super(props);
    this.state = {};
  }
  // render 方法是必须的
  // 如果shouldComponentUpdate()返回false，那么render()不会被执行。
  // forceUpdate()可以在state改变的时候重新render组件，可以跳过shouldComponentUpdate()所返回的false
  render() {
    return (
      <div className='life' />
    )
  }
  
  // 在组件装载到DOM后立即调用。如果需要进行DOM节点的初始化则应该在这里来执行该逻辑
  // 所以在这里ajax最好，这里改变的state会重新渲染dom
  componentDidMount() {
    console.log('ajax here')
  }
}

export default Life