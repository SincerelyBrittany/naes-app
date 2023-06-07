import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Dropdown.css";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Dropdown() {
  const [click, setClick] = useState(false);
  console.log("IN THE DROPDOWN", MenuItems);
  const handleClick = () => setClick(!click);
  return (
    <ul className="the-dropdown" onClick={handleClick}>
      <li className="the-dropdown-item">
        <Link to="/about/me" className="the-dropdown-link nav-links-mobile">
          About Me
        </Link>
      </li>
      <li className="the-dropdown-item">
        <Link
          to="/about/daughter"
          className="the-dropdown-link nav-links-mobile"
        >
          Daughter Page
        </Link>
      </li>
    </ul>
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
