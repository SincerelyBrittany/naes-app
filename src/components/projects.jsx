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

export default function Projects() {
  return (
    <>
      <section className="ftco-section ftco-project" id="projects-section">
        <div className="container">
          <div className="row no-gutters justify-content-center pb-5">
            <div className="col-md-12 heading-section text-center ">
              {/* <span className="subheading">Projects</span> */}
              <h2 className="mb-4">Upcoming Events</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div
                className="project img  d-flex justify-content-center align-items-end"
                style={{ backgroundImage: `url(${BookOne})` }}
              >
                <div className="overlay" />
                <div className="text p-4">
                  <h3>
                    <Link to="#">You Are Your Ony Limit</Link>
                  </h3>
                  <span>Romance</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img  d-flex justify-content-center align-items-end"
                style={{ backgroundImage: `url(${BookTwo})` }}
              >
                <div className="overlay" />
                <div className="text p-4">
                  <h3>
                    <Link to="#">You Are Your Ony Limit</Link>
                  </h3>
                  <span>Romance</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img  d-flex justify-content-center align-items-end"
                style={{ backgroundImage: `url(${BookThree})` }}
              >
                <div className="overlay" />
                <div className="text p-4">
                  <h3>
                    <Link to="#">You Are Your Ony Limit</Link>
                  </h3>
                  <span>Romance</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img  d-flex justify-content-center align-items-end"
                style={{ backgroundImage: `url(${BookFour})` }}
              >
                <div className="overlay" />
                <div className="text p-4">
                  <h3>
                    <Link to="#">You Are Your Ony Limit</Link>
                  </h3>
                  <span>Romance</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img  d-flex justify-content-center align-items-end"
                style={{ backgroundImage: `url(${BookFive})` }}
              >
                <div className="overlay" />
                <div className="text p-4">
                  <h3>
                    <Link to="#">You Are Your Ony Limit</Link>
                  </h3>
                  <span>Romance</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img  d-flex justify-content-center align-items-end"
                style={{ backgroundImage: `url(${BookSix})` }}
              >
                <div className="overlay" />
                <div className="text p-4">
                  <h3>
                    <Link to="#">You Are Your Ony Limit</Link>
                  </h3>
                  <span>Romance</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img  d-flex justify-content-center align-items-end"
                style={{ backgroundImage: `url(${BookSeven})` }}
              >
                <div className="overlay" />
                <div className="text p-4">
                  <h3>
                    <Link to="#">You Are Your Ony Limit</Link>
                  </h3>
                  <span>Romance</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img  d-flex justify-content-center align-items-end"
                style={{ backgroundImage: `url(${BookEight})` }}
              >
                <div className="overlay" />
                <div className="text p-4">
                  <h3>
                    <Link to="#">You Are Your Ony Limit</Link>
                  </h3>
                  <span>Romance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
