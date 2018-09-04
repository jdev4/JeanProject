import React, { Component } from 'react';

class SummerFun extends Component {
  constructor(props) {
    super(props)
    console.log('props', this.props)
  }
  render() {
    return (
      <div>
      <h1>My favorite place is: {this.props.favoritePlace}</h1>

      </div>
    );
  }
}

export default SummerFun;
