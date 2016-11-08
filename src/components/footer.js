import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">

          <p className="copyright">
            <img style={{display: 'inline-block'}} src={require('../../public/imgs/flavicon.jpg')} alt=""/>
            Copyright &copy; Watts
          </p>
        </div>
      </footer>
    );
  }
}
