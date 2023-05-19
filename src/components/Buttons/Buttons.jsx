import React, { Component } from "react";
import Nae from "../../assets/nae1.jpeg";
import Finicky from "../../assets/finicky1.jpeg";
import About from "../About/About";
import "../Home/Home.css";
import Container from "react-bootstrap/Container";

const Buttons = () => {
  return (
    <Container>
      <div className="home-button-container">
        <a
          href="https://www.amazon.com/Finicky-Felicia-Narene-Russell/dp/B0B45CHGVW"
          target="_blank"
        >
          <button class="home-button-53" role="button">
            Purchase on Amazon
          </button>
        </a>
      </div>
      <div class="row g-2 h-50">
        <div class="col-md home-bio-container ">
          <div className="home-button-container">
            <a
              href="https://www.amazon.com/Finicky-Felicia-Narene-Russell/dp/B0B45CHGVW"
              target="_blank"
            >
              <button class="home-button-53" role="button">
                View Upcoming Events
              </button>
            </a>
          </div>
        </div>
        <div class="col-md   align-self-end">
          <div className="home-button-container">
            <a
              href="https://www.amazon.com/Finicky-Felicia-Narene-Russell/dp/B0B45CHGVW"
              target="_blank"
            >
              <button class="home-button-53" role="button">
                Request Signed Copy
              </button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Buttons;
