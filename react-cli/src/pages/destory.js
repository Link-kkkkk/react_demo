import React, { Component } from 'react';
import './../asstes/index.css'

import CssTrans from './../components/csstrans'
class Destory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'ghgsdfs',
      key: true
    }
  }

  componentWillMount(){
    // console.log(this.state.content)
  }

  HideAni = () => {
    this.setState({ 
      content: '', 
      key: false
    })
  }

  render() {
    function Switching(props) {
      if(props.props.key){
        return (
          <CssTrans
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          content={props.props.content}
          >
          </CssTrans>
        )
      }else{
        return (
          <div />
        )
      }
    }

    return (
      <div>
        <button onClick={() => this.HideAni()}>销毁按钮</button>
        <Switching props={this.state}/>
      </div>
    )
  }
}

export default Destory