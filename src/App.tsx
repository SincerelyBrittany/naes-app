// App.tsx - Example of how to use the Navbar component
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Author from './components/Author';
import Gallery from './components/Gallery';
import Popup from './components/Popup';
import OrderACopy from './Originalcomponents/OrderACopy';
import Success from './components/Success';
import Cancel from './components/Cancel';

import './App.css';
import Contact from './components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Author/>
      {/* <Gallery /> */}
      <section id="order">
        <OrderACopy />
      </section>
      <Contact />
      {/* Demo sections for testing the navbar */}
      <Popup/>
    </>
  );
};

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </div>
  );
};

export default App;