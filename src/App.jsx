// import React from "react";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// import Layout from "./components/Layout/Layout";

// import RoutesComponent from "./components/Routes/Routes";
// import "./index.css";

// function App() {
//   return (
//     <Layout>
//       <RoutesComponent />
//     </Layout>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
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

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      <AboutTheBook data={landingPageData.AboutTheBook} />
      {/* <Services data={landingPageData.Services} /> */}
      <UpcomingEvents data={landingPageData.Gallery} />
      {/* <PastEvents data={landingPageData.Gallery} /> */}
      {/* <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
      {/* <Features data={landingPageData.Features} /> */}
    </div>
  );
};

export default App;