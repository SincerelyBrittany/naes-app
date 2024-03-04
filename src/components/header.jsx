import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
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
  );
};
