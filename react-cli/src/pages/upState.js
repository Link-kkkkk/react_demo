import React, { Component } from 'react';
import './../asstes/index.css';

let scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

function toCelsius(f) {
  return (f - 32) * 5 / 9;
}
function toFahrenheit(c) {
  return (c * 9 / 5) + 32;
}
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
      return <p>水沸腾了</p>
  }
  return <p>水没有沸腾</p>
}
function tryConvert(value, convert) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return String(rounded);
}

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { value: '' };
    this.change = this.change.bind(this)
  }
  change(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    // const value = this.state.value;
    const value = this.props.value;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>输入{scaleNames[scale]}温度</legend>
        <input value={value} onChange={this.change} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      scale: 'c'
    };
    this.CelsiusChange = this.CelsiusChange.bind(this);
    this.FahrenheitChange = this.FahrenheitChange.bind(this);
  }

  CelsiusChange(value) {
    this.setState({ scale: 'c', value });
  }

  FahrenheitChange(value) {
    this.setState({ scale: 'f', value });
  }

  render() {
    let scale = this.state.scale;
    let value = this.state.value;
    let celsius, fahrenheit;
    if (scale === 'f') {
      celsius = tryConvert(value, toCelsius)
    } else {
      celsius = value;
    }

    if (scale === 'c') {
      fahrenheit = tryConvert(value, toFahrenheit)
    } else {
      fahrenheit = value;
    }

    return (
      <div>
        <Temperature scale="c" value={celsius} onChange={this.CelsiusChange} />
        <Temperature scale="f" value={fahrenheit} onChange={this.FahrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

// class UpState extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: '' };
//     // 老规矩，要绑定this，如果不绑定直接执行类里面的this会报错
//     this.change = this.change.bind(this);
//   }

//   change(e) {
//     this.setState({ value: e.target.value });
//   }

//   render() {
//     const value = this.state.value;

//     // 渲染函数可以放出类的外部，放在类的内部需要放在render()内部
//     function BoilingVerdict(props) {
//       if (props.celsius >= 100) {
//         return <p>水沸腾了</p>
//       }
//       return <p>水没有沸腾</p>
//     }

//     return (
//       <fieldset>
//         <legend>请输入温度</legend>
//         <input
//           value={value}
//           onChange={this.change} 
//           type='number'/>
//         <BoilingVerdict celsius={parseFloat(value)} />
//       </fieldset>
//     );
//   }
// }

export default Calculator;