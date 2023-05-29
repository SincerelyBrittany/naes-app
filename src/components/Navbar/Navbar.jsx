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
import { HashLink } from "react-router-hash-link";
import DrawerComponent from "./Drawer";
import { Link } from "react-router-dom";
import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "white",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    marginRight: theme.spacing(20),
    cursor: "pointer",
    fontFamily: "Bubblegum Sans",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "15px",
    marginLeft: theme.spacing(9),
    borderBottom: "1px solid transparent",
    opacity: 1,
    transition: "all 0.5s ease",
    zIndex: 1,
    "&:hover": {
      color: "white",
      borderBottom: "1px solid black",
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
    <div className={classes.navbar}>
      {/* <CssBaseline /> */}
      <Toolbar>
        <Typography variant="h6" className={classes.logo}>
          Narene Russell
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            {/* <Link to="/" className={classes.link}>
              Home
            </Link> */}
            <HashLink smooth to="/#home" className={classes.link}>
              Home
            </HashLink>
            <HashLink smooth to="/#about" className={classes.link}>
              About Nae
            </HashLink>
            <HashLink smooth to="/#subscribe" className={classes.link}>
              Subscribe
            </HashLink>
            {/* <HashLink smooth to="/#events" className={classes.link}>
              Events
            </HashLink>
            <HashLink smooth to="/#contact" className={classes.link}>
              Contact
            </HashLink> */}
            <Link
              to="https://www.amazon.com/Finicky-Felicia-Narene-Russell/dp/B0B45CHGVW"
              className={classes.link}
              target="_blank"
            >
              Purchase Finicky Felicia
            </Link>
          </div>
        )}
      </Toolbar>
    </div>
  );
}
export default Navbar;
