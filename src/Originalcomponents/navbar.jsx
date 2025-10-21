// import React, { useState, useEffect } from "react";
// import { Link } from "react-scroll";

// export default function CustomNavbar() {
//   const [scrolled, setScrolled] = React.useState(false);

//   const handleScroll = () => {
//     const offset = window.scrollY;
//     if (offset > 200) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//   });

//   let x = [
//     "navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
//   ];
//   if (scrolled) {
//     x.push("scrolled");
//   }
//   return (
//     <>
//       <nav className={x.join(" ")} id="ftco-navbar">
//         <div className="container">
//           <Link
//             activeClass="active"
//             to="home-section"
//             spy={true}
//             smooth={true}
//             offset={50}
//             duration={500}
//             className="navbar-brand"
//           >
//             Narene Russell<span>.</span>
//           </Link>
//           <button
//             className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
//             type="button"
//             data-toggle="collapse"
//             data-target="#ftco-nav"
//             aria-controls="ftco-nav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="oi oi-menu" /> Menu
//           </button>
//           <div className="collapse navbar-collapse" id="ftco-nav">
//             <ul className="navbar-nav nav ml-auto">
//               <li className="nav-item">
//                 <Link
//                   activeClass="active"
//                   to="home-section"
//                   spy={true}
//                   smooth={true}
//                   offset={50}
//                   duration={500}
//                   className="nav-link"
//                 >
//                   <span>Home</span>
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   activeClass="active"
//                   to="about-section"
//                   spy={true}
//                   smooth={true}
//                   offset={50}
//                   duration={500}
//                   className="nav-link"
//                 >
//                   <span>Finicky Felicia</span>
//                 </Link>
//               </li>
//               {/* <li className="nav-item">
//                 <Link
//                   activeClass="active"
//                   to="chapter-section"
//                   spy={true}
//                   smooth={true}
//                   offset={50}
//                   duration={500}
//                   className="nav-link"
//                 >
//                   <span>Chapter</span>
//                 </Link>
//               </li> */}
//               {/* <li className="nav-item">
//                 <Link
//                   activeClass="active"
//                   to="testimonial-section"
//                   spy={true}
//                   smooth={true}
//                   offset={50}
//                   duration={500}
//                   className="nav-link"
//                 >
//                   <span>Reviews</span>
//                 </Link>
//               </li> */}
//               {/* <li className="nav-item">
//                 <Link
//                   activeClass="active"
//                   to="projects-section"
//                   spy={true}
//                   smooth={true}
//                   offset={50}
//                   duration={500}
//                   className="nav-link"
//                 >
//                   <span>My Books</span>
//                 </Link>
//               </li> */}
//               <li className="nav-item">
//                 <Link
//                   activeClass="active"
//                   to="author-section"
//                   spy={true}
//                   smooth={true}
//                   offset={50}
//                   duration={500}
//                   className="nav-link"
//                 >
//                   <span>About The Author</span>
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   activeClass="active"
//                   to="contact-section"
//                   spy={true}
//                   smooth={true}
//                   offset={50}
//                   duration={500}
//                   className="nav-link"
//                 >
//                   <span>Contact</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, Book, Mail, Instagram, Facebook, MapPin, ExternalLink } from 'lucide-react';


export default function CustomNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <button 
            onClick={() => scrollToSection('home')}
            className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-purple-600' : 'text-white'}`}
          >
            Narene Russell<span className="text-pink-500">.</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Author', 'Order', 'Events', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors hover:text-pink-500 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {['Home', 'About', 'Author', 'Order', 'Events', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}