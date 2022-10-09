import React, { useState } from "react";
import { FaBars, FaTimes,FaFacebook,FaInstagram,FaTwitter,FaPinterest ,FaYoutube} from "react-icons/fa";
import {BiSearch} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

 

  return (
    <>
      <nav className="navbar navbar-expand-lg  " name="home">
        <div className="container py-2">
          <Link className="navbar-brand" to="/">
            <h1>
              BEACHES.
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            onClick={handleClick}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {click ? <FaTimes color="#fff" /> : <FaBars color="#fff" />}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item">
                <Link  className="nav-link" to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link " to="Destination" smooth={true} duration={500}>
                Destinations
                </Link>
              </li>

              <li className="nav-item">
                <Link  className="nav-link" to="Carousel" smooth={true} duration={500}>
                Travel
                </Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="book" smooth={true} duration={500}>
                Book
                </Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="views" smooth={true} duration={500}>
                Views
                </Link>
              </li>
            </ul>
            <div className="nav-icons">
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <BsPerson className='icon' />
            </div>
            <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
