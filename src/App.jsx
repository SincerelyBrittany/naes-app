import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { AboutTheBook } from "./components/aboutTheBook";
import { Services } from "./components/services";
import { UpcomingEvents } from "./components/gallery";
import { PastEvents } from "./components/pastEvents";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Header data={landingPageData.Header} />} />
        <Route path="/about" element={<About data={landingPageData.About} />} />
        <Route path="/about-the-book" element={<AboutTheBook data={landingPageData.AboutTheBook} />} />
        <Route path="/upcoming-events" element={<UpcomingEvents data={landingPageData.Gallery} />} />
        <Route path="/past-events" element={<PastEvents data={landingPageData.Gallery} />} />
        <Route path="/testimonials" element={<Testimonials data={landingPageData.Testimonials} />} />
        <Route path="/team" element={<Team data={landingPageData.Team} />} />
        <Route path="/contact" element={<Contact data={landingPageData.Contact} />} />
      </Routes>
    </>
  );
};

export default App;


// import React, { useState, useEffect } from "react";
// import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { Navigation } from "./components/navigation";
// import { Header } from "./components/header";
// import { Features } from "./components/features";
// import { About } from "./components/about";
// import { AboutTheBook } from "./components/aboutTheBook";
// import { Services } from "./components/services";
// import { UpcomingEvents } from "./components/gallery";
// import { PastEvents } from "./components/pastEvents";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
// import JsonData from "./data/data.json";
// import SmoothScroll from "smooth-scroll";
// import "./App.css";

// // Initialize SmoothScroll for hash links
// const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

// const App = () => {
//   const [landingPageData, setLandingPageData] = useState({});

//   useEffect(() => {
//     setLandingPageData(JsonData);
//   }, []);

//   return (
//     <Routes>
//       <Navigation />
//       <div id="main-content">
//         <Header data={landingPageData.Header} />
//         <Features data={landingPageData.Features} />
//         <About data={landingPageData.About} />
//         <AboutTheBook data={landingPageData.AboutTheBook} />
//         <UpcomingEvents data={landingPageData.Gallery} />
//         <PastEvents data={landingPageData.Gallery} />
//         <Testimonials data={landingPageData.Testimonials} />
//         <Team data={landingPageData.Team} />
//         <Contact data={landingPageData.Contact} />
//       </div>
//     </Routes>
//   );
// };

// export default App;
