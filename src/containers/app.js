import React, { Component } from 'react';
import Navigation from '../components/navigation.js';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}
