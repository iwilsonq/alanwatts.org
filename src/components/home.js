import React, { Component } from 'react';
import Hero from './hero';
import About from './about';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <About />
      </div>
    );
  }
}
