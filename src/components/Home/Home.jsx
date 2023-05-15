import React, { Component } from "react";
import "./Home.css";

const Home = () => {
  console.log("ehere");
  return (
    <div className="container">
      <div className="image-container">
        <div class="column">
          <img src={"https://placehold.co/600x400"} alt="website logo" />
        </div>
        <div class="column">
          <img src="https://placehold.co/600x400" alt="website logo" />
        </div>
      </div>
      <div className="button-container">
        <button class="button-53" role="button">
          Purchase on Amazon
        </button>
      </div>
    </div>
  );
};

export default Home;
