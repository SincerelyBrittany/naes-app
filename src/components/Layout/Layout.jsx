import React from "react";
import CustomNavbar from "../Navbar/Navbar";
import { ThemeProvider } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <CustomNavbar />
      {children}
      {/* here you can place your footer */}
    </ThemeProvider>
  );
};

export default Layout;
