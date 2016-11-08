import React, { Component } from 'react';
import Video from './video';

const videos = [
  {
    service: 'youtube',
    video: 'https://www.youtube.com/watch?v=emHAoQGoQic'
  }
];

export default class Hero extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      videoIndex: 0
    };
  }

  goToVideo(index) {
    let videoIndex = index;
    if (videoIndex < 0) {
      videoIndex = videos.length - 1;
    } else if (videoIndex >= videos.length) {
      videoIndex = 0;
    }

    this.setState({ videoIndex });
  }

  render() {
    const { service, video } = videos[this.state.videoIndex];
    return (
      <section id="hero">
        <div className="container">
          <Video service={service} video={video} width={500} height={270} />
          <p className="quote">"The Universe is the game of the self, which plays hide and seek forever and ever and ever."</p>
          <h3 className="speaker">Alan Watts</h3>
        </div>
      </section>
    );
  }
}
