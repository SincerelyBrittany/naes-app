import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
          <li>
              <a href="/" className="page-scroll">
                Home
              </a>
            </li>
          {/* <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#about"  className="page-scroll">About The Author</a>
                </li>
                <li>
                  <a href="#about-the-book" className="page-scroll">About Finicky Felicia</a>
                </li>
              </ul>
            </li> */}
            <li>
              <a href="#about" className="page-scroll">
                About The Author
              </a>
            </li>
            <li>
              <a href="#about-the-book" className="page-scroll">
                About The Book
              </a>
            </li>
            <li>
                  <a href="#upcoming-events">Upcoming Events</a>
                </li> 
            {/* <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Events <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#upcoming-events">Upcoming Events</a>
                </li> */}
                {/* <li>
                  <a href="#past-events">Past Events</a>
                </li> */}
              {/* </ul>
            </li> */}
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li> */}
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li> */}
            {/* <li>
              <a href="#team" className="page-scroll">
                Story Time
              </a>
            </li> */}
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
