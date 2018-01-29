import React, { Component } from 'react';
import './../asstes/index.css'

class Combination extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    function FancyBorder(props) {
      return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
          {props.children}
        </div>
      );
    }

    function WelcomeDialog(props) {
      return (
        <FancyBorder color="blue">
          <h1 className="Dialog-title">
            Welcome
              </h1>
          <p className="Dialog-message">
            感谢参观鹏寰国际大厦
              </p>
        </FancyBorder>
      );
    }
    return (
      <div className="">
        <WelcomeDialog></WelcomeDialog>
      </div>
    );
  }
}

export default Combination;