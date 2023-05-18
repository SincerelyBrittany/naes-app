import React from "react";
// import { Text, Container, Anchor, MediaQuery, Button } from "@mantine/core";
// import { MdOutlineArrowDownward } from "react-icons/md";
// import FinickyFelicia from "./FinickyFelicia";
import Nae from "../../assets/nae1.jpeg";
import NaeTwo from "../../assets/nae3sil.png";
// import NaeFour from "../../assets/nae4.jpg";
import Finicky from "../../assets/finicky1.jpeg";

import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";

const About = () => {
  const [isShown, setIsShown] = React.useState(Nae);

  const onHover = () => {
    setIsShown(Finicky);
  };

  return (
    <Container>
      <div class="row g-2">
        <div class="col-md border">
          <img
            src={isShown}
            class="img-fluid"
            style={{ width: "350px", height: "400px" }}
            onMouseOver={onHover}
            onMouseLeave={() => setIsShown(Nae)}
          />
        </div>
        <div class="col-md border align-self-end">
          {/* <img
            style={{ width: "350px", height: "400px" }}
            src="https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz"
            class="img-fluid"
            alt=""
          /> */}
          <h2>
            I am a mother of four and a grandmother of four. I have been telling
            stories, and making up songs, for my children and grandchildren for
            a very long time. My book, Finicky Felicia, is based on my grandson
            who never wanted to eat healthy foods. He is still finicky as I
            write this summary. My daughter tried quite a few tricks, but he was
            very astute. She began to make vegetable muffins which included
            zucchini or carrots. This is why this book was fun to write and it
            is for any finicky eater you may know.
          </h2>
        </div>
      </div>
    </Container>
  );
};

export default About;
