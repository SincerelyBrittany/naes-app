import React from "react";
import CustomNavbar from "../Navbar/Navbar";
import { ThemeProvider } from "react-bootstrap";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <CustomNavbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
