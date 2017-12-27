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
    // 在JavaScript中，类中的方法默认不绑定this。 如果你忘记绑定this.handleClick中的this关键字并将它传递给了onClick事件，当函数实际被调用时，会报出undefined的错误。
    // 这不是React中特定的行为; 它是JavaScript中函数正常工作的一部分。
    // 一般来说，如果你引用一个方法是后面没有()，如onClick = {this.handleClick}，就会绑定该方法。
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