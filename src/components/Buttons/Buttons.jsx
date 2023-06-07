import React, { Component } from "react";
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
          <button className="home-button-53" role="button">
            Purchase on Amazon
          </button>
        </a>
      </div>
      {/* <div className="row g-2 h-50">
        <div className="col-md home-bio-container ">
          <div className="home-button-container">
            <a
              href="https://www.amazon.com/Finicky-Felicia-Narene-Russell/dp/B0B45CHGVW"
              target="_blank"
            >
              <button className="home-button-53" role="button">
                View Upcoming Events
              </button>
            </a>
          </div>
        </div>
        <div className="col-md   align-self-end">
          <div className="home-button-container">
            <a
              href="https://www.amazon.com/Finicky-Felicia-Narene-Russell/dp/B0B45CHGVW"
              target="_blank"
            >
              <button className="home-button-53" role="button">
                Request Signed Copy
              </button>
            </a>
          </div>
        </div>
      </div> */}
    </Container>
  );
};

export default Buttons;
