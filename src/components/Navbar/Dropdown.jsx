import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Dropdown.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <NavDropdown.Item className="nav-links">
        <HashLink smooth to="/#about">
          About the Author
        </HashLink>
      </NavDropdown.Item>
      <NavDropdown.Item className="nav-links">
        <Link smooth to="/daughters">
          About The Authors Daughters
        </Link>
      </NavDropdown.Item>
    </>

    // <ul className="the-dropdown" onClick={handleClick}>
    //   <li className="the-dropdown-item">
    //     <Link to="/about/me" className="the-dropdown-link nav-links-mobile">
    //       About Me
    //     </Link>
    //   </li>
    //   <li className="the-dropdown-item">
    //     <Link
    //       to="/about/daughter"
    //       className="the-dropdown-link nav-links-mobile"
    //     >
    //       Daughter Page
    //     </Link>
    //   </li>
    // </ul>
    // <div className="dropdown">
    //   <div className="dropdown-content">
    //     <ul
    //       // className={click ? "dropdown-menu clicked" : "dropdown-menu"}
    //       // className={"dropdown-menu clicked"}
    //       // className="dropdown-menu"
    //       onClick={handleClick}
    //       // className="dropdown-content"
    //     >
    //       {MenuItems.map((item, index) => {
    //         return (
    //           <li key={index}>
    //             <Link to="/about" className="dropdown-item">
    //               Services
    //             </Link>
    //             {/* <Link
    //             className={item.cName}
    //             to={item.path}
    //             onClick={() => setClick(false)}
    //           >
    //             {item.title}
    //           </Link> */}
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    // </div>
  );
}

export default Dropdown;
