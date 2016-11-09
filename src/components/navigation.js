import React, { Component } from 'react';
import  { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

export default class Navigation extends Component  {
  render() {
    return (
      <Navbar className="navbar">
        <Navbar.Header className="header">
          <Navbar.Brand className="brand">
            <Link to="/">
              <img id="brand-logo" src={require('../../public/imgs/alanwatts-logo.png')} alt="logo"/>
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav className="nav">
          <NavItem className="nav-item">
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link to="/news" >News</Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link to="/collections">Collections</Link>
          </NavItem>
          <NavItem className="nav-item" href="/center">
            <Link to="/center">Center</Link>
          </NavItem>
          <NavItem className="nav-item" href="/contact">
            <Link to="/contact">Contact</Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
