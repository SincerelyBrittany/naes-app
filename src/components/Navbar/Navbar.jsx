import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
// import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    borderBottom: "1px solid transparent",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    // <AppBar position="static">
    <>
      {/* <CssBaseline /> */}
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Nae's Place
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Link to="/faq" className={classes.link}>
              FAQ
            </Link>
          </div>
        )}
      </Toolbar>
    </>
    // </AppBar>
  );
}
export default Navbar;

//   <div>
//     <div className={click ? "main-container" : ""} onClick={() => Close()} />
//     <nav className="navbar" onClick={(e) => e.stopPropagation()}>
//       <div className="nav-container">
//         <NavLink exact to="/" className="nav-logo">
//           CodeBucks
//           <i className="fa fa-code"></i>
//         </NavLink>
//         <ul className={click ? "nav-menu active" : "nav-menu"}>
//           <li className="nav-item">
//             <NavLink
//               exact
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? "active-style nav-links" : "nav-links"
//               }
//               onClick={click ? handleClick : null}
//             >
//               Home
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               exact
//               to="/about"
//               className={({ isActive }) =>
//                 isActive ? "active-style nav-links" : "nav-links"
//               }
//               onClick={click ? handleClick : null}
//             >
//               About
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               exact
//               to="/blog"
//               className={({ isActive }) =>
//                 isActive ? "active-style nav-links" : "nav-links"
//               }
//               onClick={click ? handleClick : null}
//             >
//               Blog
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               exact
//               to="/contact"
//               className={({ isActive }) =>
//                 isActive ? "active-style nav-links" : "nav-links"
//               }
//               onClick={click ? handleClick : null}
//             >
//               Contact Us
//             </NavLink>
//           </li>
//         </ul>
//         <div className="nav-icon" onClick={handleClick}>
//           <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
//         </div>
//       </div>
//     </nav>
//   </div>
// );

// <AppBar position="static">
//   <CssBaseline />
//   <Toolbar>
//     <Typography variant="h4" className={classes.logo}>
//       Navbar
//     </Typography>
//     {isMobile ? (
//       <DrawerComponent />
//     ) : (
//       <div className={classes.navlinks}>
//         <Link to="/" className={classes.link}>
//           Home
//         </Link>
//         <Link to="/about" className={classes.link}>
//           About
//         </Link>
//         <Link to="/contact" className={classes.link}>
//           Contact
//         </Link>
//         <Link to="/faq" className={classes.link}>
//           FAQ
//         </Link>
//       </div>
//     )}
//   </Toolbar>
// </AppBar>
//   );
