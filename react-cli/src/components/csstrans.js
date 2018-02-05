import React, { Component } from 'react';
import './../asstes/index.css'

class ReactCSSTransitionGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content
    }
  }

  componentWillMount(){
    // console.log(this.state)
  }

  componentWillUnmount(){
    console.log('组件卸载')
  }

  render() {
    return (
      <div>
        <p className='cssContent'>{this.state.content}</p>
      </div>
    )
  }
}

export default ReactCSSTransitionGroup