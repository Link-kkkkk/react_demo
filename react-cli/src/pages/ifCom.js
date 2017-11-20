import React, { Component } from 'react';

class ifCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indentity: this.props.match.params.identity,
      isLogin: false
    }
    this.loginClick = this.loginClick.bind(this);
    this.logoutClick = this.logoutClick.bind(this);
  }
  // 生命周期内只会执行一次，用于抓取router参数
  componentWillMount() {
    let isLoggedIn = this.state.isLogin;
    // 只要跟state相关一律用setState，防坑
    if (this.state.indentity === 'master') {
      this.setState({ isLogin: true });
    } else {
      this.setState({ isLogin: false });
    }
  }
  render() {
    let button = null;
    let isLoggedIn = this.state.isLogin;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.logoutClick} />;
    } else {
      button = <LoginButton onClick={this.loginClick} />;
    }

    return (
      <div className="ifCom">
        {/* <Greeting indentity={this.state.indentity} />, */}
        <Greeting indentity={isLoggedIn} />,
        {button}
      </div>
    )
  }

  loginClick() {
    this.setState({ isLogin: true });
    // location.replace("/if/master");
    console.log(this.state)
  }

  logoutClick() {
    this.setState({ isLogin: false });
    // location.replace("/if/user");
    console.log(this.state)
  }
}

// 选择性渲染组件
// 渲染组件要放在类以外
function Greeting(props) {
  // let inden = props.indentity;
  // if (inden == 'master') {
  if (props.indentity) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}


function UserGreeting(props) {
  return <h1>Welcome back! Master</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up! Guest</h1>;
}


//按钮组件
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
      </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
      </button>
  );
}
export default ifCom;