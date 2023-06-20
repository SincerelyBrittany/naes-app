import React, { Component, useEffect } from "react";

import About from "../About/About";

import Button from "../Buttons/Buttons";
import Container from "react-bootstrap/Container";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Feed from "../InstagramFeed/Feed";
import Request from "../InstagramFeed/Request";

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
      <Request />
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
