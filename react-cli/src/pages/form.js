import React, { Component } from 'react';
import './../asstes/index.css'

class form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val: ''
    };

    this.change = this.change.bind(this)
    this.sumbit = this.sumbit.bind(this)
  }

  change(e) {
    this.setState({
      val: e.target.value
    })
    console.log(this.state.val)
  }

  sumbit(e) {
    console.log('sumbit success：' + this.state.val)
    e.preventsDefault();
  }

  render() {
    return (
      <div className="formContent">
        <form onSubmit={this.submit}>
          <label>
            Name:
            <input type="text" value={this.state.val} onChange={this.change} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default form