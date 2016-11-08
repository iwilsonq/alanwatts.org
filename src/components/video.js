import React, { Component, PropTypes } from 'react';
import qs from 'query-string';

export default class Video extends Component {
  static propTypes = {
    service: PropTypes.oneOf(['youtube', 'vimeo']).isRequired,
    video: PropTypes.string.isRequired
  };

  static urlMap = new Map([
    ['youtube', 'http://www.youtube.com/embed/'],
    ['vimeo', 'http://player.vimeo.com/video/']
  ]);

  getIdFromVideoString (vString) {
    const urlArr = vString.split('/');
    const idString = urlArr[urlArr.length - 1];
    const queryParams = qs.extract(vString);
    return (queryParams && qs.parse(queryParams).v) || idString || '';
  }

  render() {
    const { service, video, ...htmlTags } = this.props;
    const src = `${Video.urlMap.get(service)}${this.getIdFromVideoString(video)}`;

    return (
      <iframe
        src={src}
        frameBorder="0"
        webkitAllowFullScreen
        mozallowfullscreen
        allowFullScreen
        {...htmlTags}
      />
    );
  }
}
