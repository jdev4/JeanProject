import React from 'react';

export class Video extends React.Component {
  chooseVideo (newVideo) {
    this.setState({src: VIDEOS[newVideo]});
  }

  render() {
    return (
      <div>
        <video controls autostart autoplay src={this.props.src} />
        <Menu chooseVideo={this.chooseVideo} />
      </div>
    );
  }
}
