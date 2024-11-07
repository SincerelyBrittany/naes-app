import React from "react";
import About from "../images/about.jpg";

export default function OrderACopy() {
  return (
    <>
      <section
        className="ftco-about img ftco-section ftco-no-pt ftco-no-pb"
        id="author-section"
      >
        <div className="container">
          <div className="row d-flex no-gutters">
          
            <div className="col-md-6 col-lg-6 d-flex">
              <div className="py-md-5 w-100 bg-light px-md-5">
                <div className="py-md-5">
                  <div className="row justify-content-start pb-3">
                    <div className="col-md-12 heading-section ">
                      <span className="subheading">
                        Know More About The Author
                      </span>
                      <h2 className="mb-4">Narene Russell</h2>
                     <span>
                   Order Here
                     </span>
                    </div>
                  </div>
                  {/* <div className="counter-wrap  d-flex mt-md-3">
                    <div className="text">
                      <p className="mb-4 btn-custom">
                        <span className="number" data-number={120}>
                          0
                        </span>
                        <span>View All Books</span>
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 d-flex">
              <div className="img-about img d-flex align-items-stretch">
                <div className="overlay" />
                <div
                  className="img d-flex align-self-stretch align-items-center"
                  style={{ backgroundImage: `url(${About})` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
