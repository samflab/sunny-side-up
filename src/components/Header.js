import React, { Component } from "react";
import "../styles/Header.scss";
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <span>WE ARE CREATIVES</span> <br/>
        <HiOutlineArrowNarrowDown 
        className="down"/>
      </div>
    );
  }
}

export default Header;