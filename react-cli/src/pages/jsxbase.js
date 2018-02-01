import React, { Component } from 'react';
import './../asstes/index.css'

// 组件不能是首字母小写，所以React会认为小写字母首写是一个html标签

// 如果没有给Props传入一个值，那么它的默认值为true
// <Box autocomplete />
// <Box autocomplete={true} />

// ...可以传递对象数据
// let props = {a:1,b:2}
// <Greeting {...props} />;
class Jsxbase extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.focus = this.focus.bind(this);
  }

  focus() {
    // textInput是一个标准的DOM元素
    this.textInput.focus();
  }

  render() {
    function Header() {
      return <p>{'Header'}</p>
    }

    function Content(props) {
      return <div><p>{'Content'}</p></div>
    }

    const showHeader = false
    return (
      <div>
        {/* 当值为false，null，undefined时渲染会被自动忽略 */}
        {showHeader && <Header />}
        <Content />
        <p>{this.props.name}</p>

        {/* 触发refs */}
        <div>
          <input type="text" ref={input => {
            this.textInput = input;
          }} />
          <input type="button" value="选中上面的text input" onClick={this.focus} />
        </div>
      </div>
    )
  }
}

// 如果name没有传值，则会将name设置为默认值
Jsxbase.defaultProps = {
  name: 'defaultprops'
}

export default Jsxbase;