import React, { Component } from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navigation />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
