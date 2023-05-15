import React, { Component } from "react";
import Nae from "../../assets/nae1.jpeg";
import Finicky from "../../assets/finicky1.jpeg";
import "./Home.css";

const Home = () => {
  console.log("ehere");
  return (
    <div className="container">
      <div className="image-container">
        <div class="column">
          <p> Finicky Felicia is about . . . .</p>
          <button class="button-53" role="button">
            Purchase on Amazon
          </button>
        </div>
        <div class="column">
          <img
            src={Finicky}
            style={{ width: 500, height: 550 }}
            alt="website logo"
          />
        </div>
      </div>

      {/* <div className="button-container">
        <button class="button-53" role="button">
          Purchase on Amazon
        </button>
      </div> */}
    </div>
  );
};

export default Home;
