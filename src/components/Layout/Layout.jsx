import React from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { createContext, useContext } from "react";
import { MantineProvider, Button } from "@mantine/core";

const ThemeContext = createContext(null);

const Layout = ({ children }) => {
  console.log(children, "this is children");
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <Navbar />
      {children}
      <Footer />
    </MantineProvider>
  );
};

export default Layout;
