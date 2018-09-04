import React, { Component } from 'react';


class FavoriteThings extends Component {
  constructor(props) {
    super(props)
    console.log('props', this.props)
  }
  render() {
    return (
      <div>
      <h1>My favorite sport is: {this.props.favoriteSport}</h1>

      </div>
    );
  }
}

export default FavoriteThings;
