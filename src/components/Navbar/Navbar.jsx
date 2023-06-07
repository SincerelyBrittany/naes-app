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
    console.log("here-mouseEnter");

    // setDropdown(!dropdown);
    // if (window.innerWidth < 960) {
    //   setDropdown(true);
    // } else {
    //   setDropdown(true);
    // }
  };

  const onMousLeave = () => {
    console.log("here-mouseleave");
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
          <li
            className="nav-item"
            // onMouseEnter={onMousEnter}
            // onMouseLeave={onMousLeave}
            // onClick={onMousEnter}
          >
            {/* {dropdown ? null : (
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
                <FaCaretDown className="fa-down" />
              </Link>
            )} */}
            <Nav>
              <NavDropdown
                title="About"
                id="navbar-dropdown"
                // onClick={closeMobileMenu}
              >
                <Dropdown />
                {/* {dropdown && <Dropdown />} */}
              </NavDropdown>
            </Nav>
            {/* <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
              <FaCaretDown className="fa-down" />
            </Link> */}
          </li>
          <li className="nav-item">
            <Link
              to="/daughters"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Daughters
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default MainNavbar;
