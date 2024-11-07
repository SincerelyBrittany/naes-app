import "./styles.css";
import React from "react";
import CustomNavbar from "./components/navbar";
import HeroBanner from "./components/herobanner";
import Partner from "./components/partner";
import AboutSection from "./components/aboutsection";
import Counter from "./components/counter";
import Chapter from "./components/chapter";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Projects from "./components/projects";
import Author from "./components/author";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <CustomNavbar />
      <HeroBanner />
      {/* <Partner /> */}
      <AboutSection />
      {/* <Counter /> */}
      {/* <Chapter /> */}
      {/* <Services /> */}
      <Counter /> 
      <br />
      {/* <Projects /> */}
      {/* <Testimonials />  */}
       {/* <OrderSignedCopy/> */}
      <Author />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}