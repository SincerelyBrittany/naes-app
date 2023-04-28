import React from "react";
import { Text, Container, Anchor, MediaQuery, Button } from "@mantine/core";
// import { MdOutlineArrowDownward } from "react-icons/md";
// import FinickyFelicia from "./FinickyFelicia";
import "./about.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <section id="about" className="content">
      <Container fluid>
        <div className="about-content">
          <div style={{ marginBottom: 15 }}>
            <Text transform="uppercase" weight={500} color="yellow">
              {/* MADE WITH REACT AND MANTINE */}
            </Text>
          </div>

          <div style={{ marginBottom: 15 }}>
            <Text>
              <MediaQuery
                query="(max-width: 768px)"
                styles={{ fontSize: "2.8rem !important" }}
              >
                <h1 className="title">Nae's Place</h1>
              </MediaQuery>
            </Text>
          </div>

          <div style={{ marginBottom: 25 }}>
            <Text size="xl" color="black">
              {/* Simple showcase of this powerful and well implemented library
              called <Anchor href="https://mantine.dev/">Mantine</Anchor>. */}
            </Text>
          </div>

          <div className="buttons">
            <Link to="section-one" smooth duration={500}>
              <Button
                color="yellow"
                // rightIcon={<MdOutlineArrowDownward size={16} />}
                radius="lg"
                size="md"
              >
                Finicky Felicia
              </Button>
            </Link>

            <Button variant="default" radius="lg" size="md">
              Other stuff
            </Button>
          </div>
        </div>
      </Container>
      {/* <FinickyFelicia /> */}
    </section>
  );
}

export default About;
