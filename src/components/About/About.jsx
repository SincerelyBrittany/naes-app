import React from "react";

import Nae from "../../assets/nae1.jpeg";
import NaeTwo from "../../assets/nae3sil.png";
import NaeFour from "../../assets/nae4.jpg";
import Finicky from "../../assets/finicky1.jpeg";
import Container from "react-bootstrap/Container";

import "./About.css";

const About = () => {
  const [isShown, setIsShown] = React.useState(Nae);

  const onHover = () => {
    setIsShown(NaeFour);
  };

  return (
    <Container>
      <h2> About Narene Russell</h2>
      <br></br>
      <div class="row g-2">
        <div class="col-md ">
          <img
            src={isShown}
            class="img-fluid"
            style={{ width: "350px", height: "430px" }}
            onMouseOver={onHover}
            onMouseLeave={() => setIsShown(Nae)}
          />
        </div>
        <div class="col-md  align-self-end">
          <div className="about-bio">
            <h3>
              I am a mother of four and a grandmother of four. I have been
              telling stories, and making up songs, for my children and
              grandchildren for a very long time. My book, Finicky Felicia, is
              based on my grandson who never wanted to eat healthy foods. He is
              still finicky as I write this summary. My daughter tried quite a
              few tricks, but he was very astute. She began to make vegetable
              muffins which included zucchini or carrots. This is why this book
              was fun to write and it is for any finicky eater you may know.
            </h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
