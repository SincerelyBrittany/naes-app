import React from "react";
import { Link } from "react-router-dom";
import BookOne from "../images/book-1.jpg";
import BookTwo from "../images/book-2.jpg";
import BookThree from "../images/book-3.jpg";
import BookFour from "../images/book-4.jpg";
import BookFive from "../images/book-5.jpg";
import BookSix from "../images/book-6.jpg";
import BookSeven from "../images/book-7.jpg";
import BookEight from "../images/book-8.jpg";
import NovemberEvent from "../images/NovemberEvent.jpg";

export default function Services() {
  return (
    <>
      <section className="ftco-section ftco-no-pt" id="projects-section">
        <div className="container">
          <div className="row justify-content-center py-5 mt-5">
            <div className="col-md-5 heading-section text-center">
              {/* <span className="subheading">Services</span> */}
              <h2 className="mb-4">Upcoming Events</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center d-flex">
              {/* <div className="services-1 bg-light">
                <span className="icon">
                  <i className="flaticon-user-experience" />
                </span>
                <div className="desc">
                  <h3 className="mb-5">Experience</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div> */}
            </div>
            <div className="col-md-4 text-center d-flex">
              <div className="services-1 bg-light">
              <div
                className="project img d-flex justify-content-center align-items-end"
                style={{ backgroundImage: `url(${NovemberEvent})` }}
              >
                <div className="overlay" />
                <div className="text p-4">
                  <h3>
                    <Link to="https://www.eventbrite.com/e/black-excellence-winter-and-job-festival-2024-tickets-1026775171177?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl">Winter Festival</Link>
                  </h3>
                  <span>2pm - 8pm</span>
                  <span>Queens, NY</span>
                </div>
              </div>
                {/* <span className="icon">
                  <i className="flaticon-network" />
                </span>
                <div className="desc">
                  <h3 className="mb-5">Marketing Goals</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div> */}
              </div>
            </div>
            <div className="col-md-4 text-center d-flex">
              {/* <div className="services-1 bg-light">
                <span className="icon">
                  <i className="flaticon-innovation" />
                </span>
                <div className="desc">
                  <h3 className="mb-5">Targetting Vission</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
