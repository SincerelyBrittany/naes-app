// App.tsx - Example of how to use the Navbar component
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      {/* Demo sections for testing the navbar */}
    
      <section id="about" className="section section-about">
        <h1>About Section</h1>
        <p>Click any navbar link to smoothly scroll to that section</p>
      </section>
      
      <section id="author" className="section section-author">
        <h1>Author Section</h1>
        <p>The navbar is fully responsive - try resizing your browser</p>
      </section>
      
      <section id="order" className="section section-order">
        <h1>Order Section</h1>
        <p>On mobile, you'll see a hamburger menu</p>
      </section>
      
      <section id="events" className="section section-events">
        <h1>Events Section</h1>
        <p>All navigation is smooth and seamless</p>
      </section>
      
      <section id="contact" className="section section-contact">
        <h1>Contact Section</h1>
        <p>Ready to add more content!</p>
      </section>
    </div>
  );
};

export default App;