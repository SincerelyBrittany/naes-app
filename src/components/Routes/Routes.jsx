// import React from "react";
// import { Route, Routes } from "react-router-dom";

// import About from "../About/About";
// // import Contact from "../Contact/Contact";
// // import Events from "../Events/Events";
// // import FAQS from "../FAQs/FAQS";
// import Home from "../Home/Home";
// // import Testimonials from "../Testimonials/Testimonials";

// const RoutesComponent = () => (
//   <Routes>
//     <Route path="/" element={<Home />}></Route>
//     <Route path="/about" element={<About />}></Route>
//     {/* <Route path="/events" element={<Events />}></Route>
//     <Route path="/contact" element={<Contact />}></Route>
//     <Route path="/testimonials" element={<Testimonials />}></Route>
//     <Route path="/faqs" element={<FAQS />}></Route> */}
//   </Routes>
// );

// export default RoutesComponent;

import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Faq from "../Faq/faq";
import PagesLayout from "../PagesLayout/PagesLayout";

import "./Routes.css";

const RoutesComponent = () => (
  <>
    <Routes>
      <Route path="/" element={<PagesLayout />}>
        <Route path="/#about" element={<About />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/#contact" element={<Contact />}></Route>
        
      </Route>
    </Routes>
  </>
);

export default RoutesComponent;
