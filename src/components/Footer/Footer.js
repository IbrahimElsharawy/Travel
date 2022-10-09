import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer pt-5 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 left">
            <h3>BEACHES.</h3>
          </div>
          <div className="col-lg-6 right">
            <div className="social">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaTwitter className="icon" />
              <FaPinterest className="icon" />
              <FaYoutube className="icon" />
            </div>
          </div>
          <div className="made-by">
            <p>
              this project made by <span>ibrahim sharawy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
