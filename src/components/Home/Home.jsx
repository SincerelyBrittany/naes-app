import React, { Component, useEffect } from "react";
import Finicky from "../../assets/finicky1.jpeg";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div class="row g-1 h-50" id="home">
        <div class="col-md home-bio-container ">
          <div className="home-bio">
            <h1> Finicky Felicia</h1>
            <h2>
              Do you know a finicky eater? How about someone who doesn't like to
              eat anything healthy? Well, let me introduce you to a little girl
              named Felicia.  Felicia loves sweets and frowns upon foods that
              are good for her, including oatmeal! Finicky Felicia is a book
              about how she is surprised to taste vegetables while learning how
              important it is to eat vegetables. Read more to learn how Finicky
              Felicia became less finicky!
            </h2>

            <a
              href="https://www.instagram.com/naes.place/"
              target="_blank"
              // className="a-tag-button"
            >
              <h5> By: Narene Russell </h5>
            </a>

            <a
              href="https://www.instagram.com/jscalesjrdesign/"
              target="_blank"
              // className="a-tag-button"
            >
              <p> Illustrated By: James Scales Jr</p>
            </a>
          </div>
        </div>
        <div class="col-md   align-self-end">
          <div className="home-image">
            <a
              href="https://www.amazon.com/Finicky-Felicia-Narene-Russell/dp/B0B45CHGVW"
              target="_blank"
            >
              <img
                src={Finicky}
                class="img-fluid"
                alt=""
                style={{
                  maxWidth: "90%",
                  maxHeight: "550px",
                  borderRadius: "30px",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
