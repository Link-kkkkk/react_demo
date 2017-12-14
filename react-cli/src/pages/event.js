import React, { Component } from 'react';
import './../asstes/style/events.css'

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    // 这个绑定是必要的，要不然该事件中的this就会是当前实例
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div className="EventContent">
        <button className="btn" onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export default Events;