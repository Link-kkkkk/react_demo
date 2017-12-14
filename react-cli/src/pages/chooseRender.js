import React, { Component } from 'react';
import './../asstes/style/choose.css'

class ChooseRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
    this.loginClick = this.loginClick.bind(this);
    this.logoutClick = this.logoutClick.bind(this);
  }

  loginClick() {
    // this.setState({ isLogin: true });
    console.log(this.state)
    this.setState((prevState, props) => ({
      isLogin: true
    }));
  }

  logoutClick() {
    // this.setState({ isLogin: false });
    console.log(this.state)
    this.setState((prevState, props) => ({
      isLogin: false
    }));
  }

  render() {
    const isLoggedIn = this.state.isLogin;
    let button = null;

    function LoginButton(props) {
      return (
        <button className="loginBtn" onClick={props.onClick}>
          Login
          </button>
      );
    }

    function LogoutButton(props) {
      return (
        <button className="logoutBtn" onClick={props.onClick}>
          Logout
        </button>
      );
    }

    function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <UserGreeting />;
      }
      return <GuestGreeting />;
    }

    function UserGreeting(props) {
      return <h1>Welcome back!</h1>;
    }

    function GuestGreeting(props) {
      return <h1>Please sign up!</h1>;
    }

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.logoutClick} />;
    } else {
      button = <LoginButton onClick={this.loginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default ChooseRender;