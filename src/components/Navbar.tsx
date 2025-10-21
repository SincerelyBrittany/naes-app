// Navbar.tsx - TypeScript React Component
import React, { useState, useEffect } from 'react';
import './Navbar.css';

// Type definition for menu items
type MenuItem = 'Home' | 'About' | 'Author' | 'Order' | 'Events' | 'Contact';

const Navbar: React.FC = () => {
  // State with explicit types
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home'); // Track active section

  // Scroll event handler
  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to detect active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = ['home', 'about', 'author', 'order', 'events', 'contact'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Navigation menu items
  const menuItems: MenuItem[] = ['Home', 'About', 'Author', 'Order', 'Events', 'Contact'];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo/Brand */}
        <button 
          onClick={() => scrollToSection('home')} 
          className="navbar-brand"
          type="button"
        >
          Narene Russell<span className="brand-dot">.</span>
        </button>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          {menuItems.map((item: MenuItem) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`navbar-link ${activeSection === item.toLowerCase() ? 'navbar-link-active' : ''}`}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="navbar-mobile-button"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          type="button"
        >
          {isMobileMenuOpen ? (
            // X icon when menu is open
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            // Hamburger icon when menu is closed
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="navbar-mobile-menu">
          {menuItems.map((item: MenuItem) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`navbar-mobile-link ${activeSection === item.toLowerCase() ? 'navbar-mobile-link-active' : ''}`}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;