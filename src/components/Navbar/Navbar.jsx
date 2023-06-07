// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   CssBaseline,
//   Typography,
//   makeStyles,
//   useTheme,
//   useMediaQuery,
// } from "@material-ui/core";
// import { HashLink } from "react-router-hash-link";
// import DrawerComponent from "./Drawer";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const useStyles = makeStyles((theme) => ({
//   navbar: {
//     backgroundColor: "red",
//     position: "sticky",
//     top: 0,
//     zIndex: 100,
//   },
//   navlinks: {
//     marginLeft: theme.spacing(5),
//     display: "flex",
//   },
//   logo: {
//     flexGrow: "2",
//     marginRight: theme.spacing(50),
//     cursor: "pointer",
//     fontFamily: "Bubblegum Sans",
//   },
//   link: {
//     textDecoration: "none",
//     color: "black",
//     fontSize: "15px",
//     marginLeft: theme.spacing(9),
//     borderBottom: "1px solid transparent",
//     opacity: 1,
//     transition: "all 0.5s ease",
//     zIndex: 1,
//     "&:hover": {
//       color: "white",
//       borderBottom: "1px solid black",
//     },
//   },
// }));

// function Navbar() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const [click, setClick] = React.useState(false);

//   const handleClick = () => setClick(!click);
//   const Close = () => setClick(false);

//   return (
//     <div className={classes.navbar}>
//       {/* <CssBaseline /> */}
//       <Toolbar>
//         <Typography variant="h6" className={classes.logo}>
//           Narene Russell
//         </Typography>
//         {isMobile ? (
//           <DrawerComponent />
//         ) : (
//           <div className={classes.navlinks}>
//             {/* <Link to="/" className={classes.link}>
//               Home
//             </Link> */}
//             <HashLink smooth to="/#home" className={classes.link}>
//               Home
//             </HashLink>
//             <HashLink smooth to="/#about" className={classes.link}>
//               About Nae
//             </HashLink>
//             <HashLink smooth to="/#subscribe" className={classes.link}>
//               Subscribe
//             </HashLink>
//             <HashLink smooth to="/#events" className={classes.link}>
//               Events
//             </HashLink>
//             <HashLink smooth to="/#contact" className={classes.link}>
//               Contact
//             </HashLink>
//             <Link
//               to="https://www.amazon.com/Finicky-Felicia-Narene-Russell/dp/B0B45CHGVW"
//               className={classes.link}
//               target="_blank"
//             >
//               Purchase Finicky Felicia
//             </Link>
//           </div>
//         )}
//       </Toolbar>
//     </div>
//   );
// }
// export default Navbar;

// import React from "react";
// import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
// import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   logo: {
//     display: "block",
//     margin: "20px auto",
//     marginRight: theme.spacing(50),
//   },
//   navlinks: {
//     marginLeft: theme.spacing(50),
//     display: "flex",
//   },
//   navbar: {
//     position: "sticky",
//     top: 0,
//     zIndex: 100,
//   },
//   link: {
//     textDecoration: "none",
//     color: "black",
//     fontSize: "15px",
//     marginLeft: theme.spacing(9),
//     borderBottom: "1px solid transparent",
//     opacity: 1,
//     transition: "all 0.5s ease",
//     zIndex: 1,
//     "&:hover": {
//       color: "white",
//       borderBottom: "1px solid black",
//     },
//   },
// }));

// const Navbar = () => {
//   const classes = useStyles();

//   return (
//     <AppBar position="static" className={classes.navbar}>
//       <Toolbar>
//         <div>
//           <img
//             id="logo-main"
//             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png"
//             width="200"
//             alt="Logo Thing main logo"
//             className={classes.logo}
//           />
//         </div>
//         <div style={{ flexGrow: 1 }}>
//           <div className={classes.navlinks}>
//             <HashLink smooth to="/#home" className={classes.link}>
//               Home
//             </HashLink>
//             <HashLink smooth to="/#about" className={classes.link}>
//               About Nae
//             </HashLink>

//             <Link
//               to="https:www.amazon.com/Finicky-Felicia-Narene-Russell/dp/B0B45CHGVW"
//               className={classes.link}
//               target="_blank"
//             >
//               Purchase Finicky Felicia
//             </Link>
//           </div>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   makeStyles,
//   MenuItem,
//   Menu,
//   IconButton,
//   useMediaQuery,
//   useTheme,
// } from "@material-ui/core";
// import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";
// import MenuIcon from "@material-ui/icons/Menu";

// import "./Navbar.css";

// const useStyles = makeStyles((theme) => ({
//   logo: {
//     display: "block",
//     margin: "20px auto",
//     marginRight: theme.spacing(2),
//   },
//   navlinks: {
//     display: "flex",
//     alignItems: "center",
//   },
//   navbar: {
//     position: "sticky",
//     top: 0,
//     zIndex: 100,
//   },
//   link: {
//     textDecoration: "none",
//     color: "black",
//     fontSize: "15px",
//     marginLeft: theme.spacing(2),
//     borderBottom: "1px solid transparent",
//     opacity: 1,
//     transition: "all 0.5s ease",
//     zIndex: 1,
//     "&:hover": {
//       color: "white",
//       borderBottom: "1px solid black",
//     },
//   },
// }));

// const Navbar = () => {
//   // const classes = useStyles();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleDropdownOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleDropdownClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar position="static" className="navbar">
//       <Toolbar>
//         <div>
//           <img
//             id="logo-main"
//             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png"
//             width="200"
//             alt="Logo Thing main logo"
//             className="logo"
//           />
//         </div>
//         {isMobile ? (
//           <>
//             <IconButton
//               edge="end"
//               color="inherit"
//               aria-label="menu"
//               onClick={handleDropdownOpen}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               anchorEl={anchorEl}
//               keepMounted
//               open={open}
//               onClose={handleDropdownClose}
//             >
//               <MenuItem
//                 component={Link}
//                 to="/#home"
//                 onClick={handleDropdownClose}
//               >
//                 Home
//               </MenuItem>
//               <MenuItem
//                 component={Link}
//                 to="/#about"
//                 onClick={handleDropdownClose}
//               >
//                 About Nae
//               </MenuItem>
//               <MenuItem
//                 component={Link}
//                 to="https://www.amazon.com/Finicky-Felicia-Narene-Russell/dp/B0B45CHGVW"
//                 onClick={handleDropdownClose}
//                 target="_blank"
//               >
//                 Purchase Finicky Felicia
//               </MenuItem>
//             </Menu>
//           </>
//         ) : (
//           <div className="navlinks">
//             <HashLink smooth to="/#home" className="link">
//               Home
//             </HashLink>
//             <Typography
//               aria-controls="about-menu"
//               aria-haspopup="true"
//               onMouseOver={handleDropdownOpen}
//               className="link"
//             >
//               About Nae
//             </Typography>
//             <Menu
//               id="about-menu"
//               anchorEl={anchorEl}
//               keepMounted
//               open={open}
//               onClose={handleDropdownClose}
//               getContentAnchorEl={null}
//               anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//               transformOrigin={{ vertical: "top", horizontal: "center" }}
//             >
//               <MenuItem
//                 component={Link}
//                 to="/faqs"
//                 onClick={handleDropdownClose}
//               >
//                 FAQs
//               </MenuItem>
//               <MenuItem
//                 component={Link}
//                 to="/more"
//                 onClick={handleDropdownClose}
//               >
//                 More
//               </MenuItem>
//             </Menu>
//             <MenuItem
//               to="https://www.amazon.com/Finicky-Felicia-Narene-Russell/dp/B0B45CHGVW"
//               className="link"
//               target="_blank"
//             >
//               Purchase Finicky Felicia
//             </MenuItem>
//           </div>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
// import { HashLink } from "react-router-hash-link";
// import logo from "../../assets/nae1.jpeg";

// import "./Navbar.css";
// const Navbar = () => {
//   const [isMenu, setisMenu] = useState(false);
//   const [isResponsiveclose, setResponsiveclose] = useState(false);
//   const toggleClass = () => {
//     setisMenu(isMenu === false ? true : false);
//     setResponsiveclose(isResponsiveclose === false ? true : false);
//   };
//   let boxClass = ["main-menu menu-right menuq1"];
//   if (isMenu) {
//     boxClass.push("menuq2");
//   } else {
//     boxClass.push("");
//   }
//   const [isMenuSubMenu, setMenuSubMenu] = useState(false);
//   const toggleSubmenu = () => {
//     setMenuSubMenu(isMenuSubMenu === false ? true : false);
//   };
//   let boxClassSubMenu = ["sub__menus"];
//   if (isMenuSubMenu) {
//     boxClassSubMenu.push("sub__menus__Active");
//   } else {
//     boxClassSubMenu.push("");
//   }
//   return (
//     <header className="header__middle">
//       <div className="nav-container">
//         <div className="row">
//           {/* Add Logo  */}
//           <div className="header__middle__logo">
//             <NavLink exact activeClassName="is-active" to="/">
//               <img
//                 src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png"
//                 alt="logo"
//               />
//             </NavLink>
//           </div>
//           <div className="header__middle__menus">
//             <nav className="main-nav ">
//               {/* Responsive Menu Button */}
//               {isResponsiveclose === true ? (
//                 <>
//                   <span
//                     className="menubar__button"
//                     style={{ display: "none" }}
//                     onClick={toggleClass}
//                   >
//                     <FiXCircle />
//                   </span>
//                 </>
//               ) : (
//                 <>
//                   <span
//                     className="menubar__button"
//                     style={{ display: "none" }}
//                     onClick={toggleClass}
//                   >
//                     <FiAlignRight />
//                   </span>
//                 </>
//               )}
//               <ul className={boxClass.join(" ")}>
//                 <li className="menu-item">
//                   <NavLink
//                     exact
//                     activeClassName="is-active"
//                     onClick={toggleClass}
//                     to={`/`}
//                   >
//                     Home
//                   </NavLink>
//                 </li>
//                 <li
//                   onClick={toggleSubmenu}
//                   className="menu-item sub__menus__arrows"
//                 >
//                   <Link to="#">
//                     About <FiChevronDown />
//                   </Link>
//                   <ul className={boxClassSubMenu.join(" ")}>
//                     <li>
//                       {/* <NavLink
//                         onClick={toggleClass}
//                         activeClassName="is-active"
//                         to={`/Online`}
//                       >
//                         About Narene
//                       </NavLink> */}
//                       <HashLink
//                         smooth
//                         to="/#about"
//                         onClick={toggleClass}
//                         activeClassName="is-active"
//                       >
//                         About Narene
//                       </HashLink>
//                     </li>
//                     <li>
//                       <NavLink
//                         onClick={toggleClass}
//                         activeClassName="is-active"
//                         to={`/Offline`}
//                       >
//                         About Narene's Daughters
//                       </NavLink>
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="menu-item ">
//                   <NavLink
//                     onClick={toggleClass}
//                     activeClassName="is-active"
//                     to={`/Contact`}
//                   >
//                     Contact
//                   </NavLink>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const MainNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand as={Link} to="/">
        <img
          src="/path/to/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="More" id="navbar-dropdown">
            <NavDropdown.Item as={Link} to="/faq">
              FAQ
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/contact">
              Contact
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavbar;
