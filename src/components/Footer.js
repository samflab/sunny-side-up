import React, { Component } from "react";
import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {FaPinterest} from "react-icons/fa";
import "../styles/Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
            <h2 className="footer-heading">sunnyside</h2>
            <div className="footer-links">
                <span className="footer-link-items">About</span>
                <span className="footer-link-items">Services</span>
                <span className="footer-link-items">Projects</span>
            </div>

            <div className="footer-icons">
            <AiFillFacebook className="social-media-icons"/>
            <AiOutlineInstagram className="social-media-icons"/>
            <AiOutlineTwitter className="social-media-icons"/>
            <FaPinterest className="social-media-icons"/>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
