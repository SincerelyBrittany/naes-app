import React, { Component, useEffect } from "react";
import CustomNavbar from "../Navbar/Navbar";
import { ThemeProvider } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Container from "react-bootstrap/Container";
import { Icon } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const Layout = ({ children }) => {
  const [showButton, setShowButton] = React.useState(false);
  useEffect(() => {
    // Button is displayed after scrolling for 300 pixels
    const handleScrollButtonVisiblity = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisiblity);
    return () => {
      window.addEventListener("scroll", handleScrollButtonVisiblity);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <CustomNavbar />
      <Container>{children}</Container>
      {showButton && (
        <div className={`scrollToTop`}>
          <ExpandLessIcon
            className="bottom-right-corner"
            onClick={handleScrollToTop}
          >
            Back
          </ExpandLessIcon>
        </div>
      )}
      <br></br>
      <br></br>
      <Footer />
    </>
  );
};

export default Layout;
