import React from "react";
import { Link } from "react-router-dom";
import BookStore from "../images/undraw_book_lover_mkck.svg";

export default function HeroBanner() {
  return (
    <>
      <section className="hero-wrap js-fullheight">
      <header id="home-section">
      <div className="intro">
        <div >
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 intro-text">
                <h1>
                  {/* {props.data ? props.data.title : "Loading"} */}
                  Finicky Felicia
                  <span></span>
                </h1>
                {/* <p>{props.data ? props.data.paragraph : "Loading"}</p> */}
                <a
                  href="https://www.amazon.com/Finicky-Felicia-Narene-Russell/dp/B0B45CHGVW"
                  target="_blank"
                  className="btn btn-custom btn-lg page-scroll"
                >
                 Amazon
                </a>
                {" "}
                <a
                  href="#about-the-book"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>
                {" "}
                <a
                  href="https://www.barnesandnoble.com/w/finicky-felicia-narene-russell/1144045912"
                  className="btn btn-custom btn-lg page-scroll"
                  target="_blank"
                >
                  Barnes & Noble
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
        {/* <div className="overlay" />
        <div className="container-fluid px-0">
          <div className="row d-md-flex no-gutters slider-text align-items-center js-fullheight justify-content-end">
            <img
              className="one-third js-fullheight align-self-end order-md-last img-fluid"
              src={BookStore}
              alt=""
            />
            <div className="one-forth d-flex align-items-center js-fullheight">
              <div className="text mt-5">
                <span className="subheading">Best Seller Book Of The Week</span>
                <h1>Clue Of The Wooden Cottage</h1>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
                <p>
                  <Link to="#" className="btn btn-primary py-3 px-4">
                    Buy Now For $22.78
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}
