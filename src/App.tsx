// App.tsx - Example of how to use the Navbar component
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Author from './components/Author';
import Gallery from './components/Gallery';
import Popup from './components/Popup';

import './App.css';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Author/>
      {/* <Gallery /> */}
      <Contact />
      {/* Demo sections for testing the navbar */}
      <Popup/>
    
      {/* <section id="order" className="section section-order">
        <h1>Order Section</h1>
        <p>On mobile, you'll see a hamburger menu</p>
      </section> */}
      
    </div>
  );
};

export default App;