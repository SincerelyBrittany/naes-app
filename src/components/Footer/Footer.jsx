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

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            {/* <img src={logo} alt="Logo" className="footer-logo" /> */}
            <p className="footer-name">NR</p>
            <p className="footer-name">Website Created By @SincerelyBrittany</p>
          </Col>
        </Row>
      </Container>
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
