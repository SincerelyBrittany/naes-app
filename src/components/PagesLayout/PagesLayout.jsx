import React, { Component, useEffect } from "react";

import About from "../About/About";

import Button from "../Buttons/Buttons";
import Container from "react-bootstrap/Container";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";

const PagesLayout = () => {
  return (
    <Container>
      <div>
        <Home />
        <hr />
        <Button />
        <div className="section" id="about">
          <hr />
          <br></br>
          <About />
        </div>
        <hr />
        {/* <Daughters /> */}
        {/* <hr /> */}
      </div>
      <div className="section" id="contact">
        <Contact />
      </div>
      {/* <hr /> */}
      {/* <div className="section" id="subscribe">
        <h2> Subscribe </h2>
        <MailchimpForm />
      </div> */}
    </Container>
  );
};

export default PagesLayout;
