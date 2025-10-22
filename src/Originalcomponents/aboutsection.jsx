import React from "react";
import BgAbout from "../images/bg_1.jpg";
export default function AboutSection() {
  return (
    <>
      <section className="ftco-about img ftco-section" id="about-section">
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-6 col-lg-6 d-flex">
              <div className="img-about img d-flex align-items-stretch">
                <div className="overlay" />
                <div
                  className="img d-flex align-self-stretch align-items-center"
                  style={{ backgroundImage: `url(${BgAbout})` }}
                ></div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 pl-md-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section">
                  <h2 className="mb-4">About Finicky Felicia</h2>
                  <div className="text-about">
                    <h4>Do you know a finicky eater? </h4>
                    <h4>How about someone who doesn't like to eat anything healthy? </h4>
                    <h4> <i><b>Well, let me introduce you to a little girl named Felicia.</b></i> </h4>
                    <h4>
                   
                    
                    Felicia loves sweets and frowns upon foods that are good for her, including oatmeal! Finicky Felicia is a book about how she is surprised to taste vegetables while learning how important it is to eat vegetables.
                     Read more to learn how Finicky Felicia became less finicky!
                    </h4>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
