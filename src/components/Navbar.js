import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/Navbar.scss";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" className="navbar">
          <Navbar.Brand className="navbar-brand">sunnyside</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav className="right-links">
              <Nav.Link className="nav-links" >About</Nav.Link>
              <Nav.Link className="nav-links">Services</Nav.Link>
              <Nav.Link className="nav-links" >Projects</Nav.Link>
              <button className="contact-us">CONTACT</button>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
