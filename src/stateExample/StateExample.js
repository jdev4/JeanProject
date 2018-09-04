import React, { Component } from 'react';
import { PropTypes } from 'react';

class StateExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {amount: 0}
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({amount: this.state.amount + 1})
    console.log("incrementAmount")
  }
  render() {
    return (
      <div>
      <button onClick={this.handleClick}>Add One</button>
      <h3>We have {this.state.amount} Items</h3>
      </div>
    );
  }
}

export default StateExample;
