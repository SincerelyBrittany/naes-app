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
import { Container, Row, Col } from "react-bootstrap";
import EmailIcon from "@material-ui/icons/Email";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <Container> */}
      <Row>
        <Col xs={12} className="text-center">
          {/* <img src={logo} alt="Logo" className="footer-logo" /> */}
          <p className="footer-name">N R</p>

          <span>
            <a
              href="https://www.facebook.com/profile.php?id=100084813500514"
              target="_blank"
            >
              <FacebookIcon />
            </a>{" "}
            |{" "}
            <a href="https://www.instagram.com/naes.place/" target="_blank">
              <InstagramIcon />
            </a>
          </span>

          <p className="footer-name">
            Website Created By
            <a href="https://www.sincerelybrittany.com"> @SincerelyBrittany</a>
          </p>
        </Col>
      </Row>
      {/* </Container> */}
    </footer>
    // <>
    //   <Typography
    //     variant="subtitle1"
    //     align="center"
    //     color="textSecondary"
    //     component="p"
    //   >
    //     My Website &copy; {new Date().getFullYear()}
    //   </Typography>
    // </>
  );
};

export default Footer;
