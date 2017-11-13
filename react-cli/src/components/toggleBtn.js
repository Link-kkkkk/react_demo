import React, { Component } from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 这个绑定是必要的，要不然该事件中的this就会是当前实例
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let toggleType = this.state.isToggleOn
    if(toggleType){
      toggleType = false
    }else{
      toggleType = true
    }
    this.setState(prevState => ({
      // isToggleOn: !prevState.isToggleOn
      isToggleOn: toggleType
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle;