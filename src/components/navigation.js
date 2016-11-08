import React, { Component } from 'react';
import  { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Navigation extends Component  {
  render() {
    return (
      <Navbar className="navbar">
        <Navbar.Header className="header">
          <Navbar.Brand className="brand">
            <a href="#">
              <img id="brand-logo" src={require('../../public/imgs/alanwatts-logo.png')} alt="logo"/>
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav className="nav">
          <NavItem className="nav-item" href="#">Home</NavItem>
          <NavItem className="nav-item" href="#news">News</NavItem>
          <NavItem className="nav-item" href="#collections">Collections</NavItem>
          <NavItem className="nav-item" href="#center">Center</NavItem>
          <NavItem className="nav-item" href="#contact">Contact</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
