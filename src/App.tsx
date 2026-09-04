// App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Author from './components/Author';
import Popup from './components/Popup';
import Footer from './components/Footer';
import Analytics from './components/Analytics';
import Contact from './components/Contact';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Analytics />
      <Navbar />
      <Hero />
      <About />
      <Author />
      {/* <Gallery /> */}
      <Contact />
      <Footer />
      <Popup />
    </div>
  );
};

export default App;
