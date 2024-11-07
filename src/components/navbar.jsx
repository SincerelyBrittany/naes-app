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


import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function CustomNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Track the mobile menu state

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []); // Add empty dependency array to avoid multiple event listeners

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle the menu visibility
  };

  let x = [
    "navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
  ];
  if (scrolled) {
    x.push("scrolled");
  }

  return (
    <nav className={x.join(" ")} id="ftco-navbar">
      <div className="container">
        <Link
          activeClass="active"
          to="home-section"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="navbar-brand"
        >
          Narene Russell<span>.</span>
        </Link>
        <button
          className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
          type="button"
          onClick={toggleMenu}  // Manually handle the menu toggle
          aria-controls="ftco-nav"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu" /> Menu
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="home-section"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="nav-link"
              >
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about-section"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="nav-link"
              >
                <span>Finicky Felicia</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="author-section"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="nav-link"
              >
                <span>About The Author</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact-section"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="nav-link"
              >
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
