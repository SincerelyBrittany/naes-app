import React from "react";

export const AboutTheBook = (props) => {
  return (
    <div id="about-the-book">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
          <div className="about-the-book-text">
              <h2>Finicky Felicia</h2>
              <p>Do you know a finicky eater? 
                How about someone who doesn't 
                like to eat anything healthy? 
                Well, let me introduce you to a little girl 
                named Felicia.  Felicia loves sweets and frowns upon foods that are good for her, including oatmeal! Finicky Felicia is a book about how she is surprised to taste vegetables while learning how important it is to eat vegetables. Read more to learn how Finicky Felicia became less finicky!</p>
            </div>
            <a
                  href="https://www.amazon.com/Finicky-Felicia-Narene-Russell/dp/B0B45CHGVW"
                  target="_blank"
                  className="btn btn-custom btn-lg page-scroll"
                >
                 Buy on Amazon
                </a>
                {" "}
                <a
                  href="https://www.barnesandnoble.com/w/finicky-felicia-narene-russell/1144045912"
                  className="btn btn-custom btn-lg page-scroll"
                  target="_blank"
                >
                  Buy On Barnes & Noble
                </a>
              </div>
          <div className="col-xs-12 col-md-6">
          <img src="img/about-the-book/finicky.jpeg" className="img-responsive" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
