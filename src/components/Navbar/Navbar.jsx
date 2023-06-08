import React, { useState } from "react";
// import { Button } from "./Button";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { GiFlame } from "react-icons/gi";
import { FaTimes, FaBars, FaCaretDown } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function MainNavbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMousEnter = () => {
    // setDropdown(!dropdown);
    // if (window.innerWidth < 960) {
    //   setDropdown(true);
    // } else {
    //   setDropdown(true);
    // }
  };

  const onMousLeave = () => {
    // setDropdown(false);
    // if (window.innerWidth < 960) {
    //   setDropdown(true);
    // } else {
    //   setDropdown(false);
    // }
  };

  return (
    <>
      {/* <Navbar bg="light" expand="lg" sticky="top" className="navbar"> */}{" "}
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Narene Russell
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes className="fa" /> : <FaBars className="fa" />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <HashLink
              to="/#about"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink
              to="/#contact"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact
            </HashLink>
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default MainNavbar;
