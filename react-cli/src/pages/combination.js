import React, { Component } from 'react';
import './../asstes/index.css'

class Combination extends Component {
  constructor(props) {
    super(props);
    this.state = { login: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(1)
    return true
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    if (this.state.login) {
      alert(`Welcome aboard, ${this.state.login}!`);
    } else {
      alert('you are not login')
    }
  }

  render() {
    function FancyBorder(props) {
      return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
          {props.children}
        </div>
      );
    }

    function Dialog(props) {
      return (
        <FancyBorder color="blue">
          <h1 className="Dialog-title">
            {props.title}
          </h1>
          <p className="Dialog-message">
            {props.message}
          </p>
          {props.children}
        </FancyBorder>
      );
    }

    return (
      <Dialog title="Mars Exploration Program"
        message="How should we refer to you?">
        <input value={this.state.login}
          onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
                </button>
      </Dialog>
    );
  }
}

export default Combination;