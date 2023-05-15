import React from "react";
// import { Text, Container, Anchor, MediaQuery, Button } from "@mantine/core";
// import { MdOutlineArrowDownward } from "react-icons/md";
// import FinickyFelicia from "./FinickyFelicia";
import Nae from "../../assets/nae1.jpeg";
import Finicky from "../../assets/finicky1.jpeg";
import "./about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <div className="image-container">
        <div class="column">
          <div class="column">
            {/* <img src="https://placehold.co/600x400" alt="website logo" /> */}
            <p>
              Bio + direct to author site. + 
            </p>
          </div>
        </div>
        <div class="column">
          <img
            src={Nae}
            style={{ width: 500, height: 550 }}
            alt="website logo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
