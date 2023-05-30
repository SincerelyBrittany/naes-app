import React, { Component, useEffect } from "react";
import Finicky from "../../assets/finicky1.jpeg";
import About from "../About/About";
// import "./Home.css";
import Button from "../Buttons/Buttons";
import Container from "react-bootstrap/Container";
import Request from "../InstagramFeed/Request";

import MailchimpForm from "../Subscribe/MailChimpForm";
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
      </div>
      <Contact />
      <hr />
      {/* <div className="section" id="subscribe">
        <h2> Subscribe </h2>
        <MailchimpForm />
      </div> */}
    </Container>
  );
};

export default PagesLayout;
