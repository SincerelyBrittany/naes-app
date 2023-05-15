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

const Footer = () => {
  return (
    <>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        My Website &copy; {new Date().getFullYear()}
      </Typography>
    </>
  );
};

export default Footer;
