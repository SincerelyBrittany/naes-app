import React from "react";

export default function Services() {
  return (
    <>
      <section className="ftco-section ftco-no-pt">
        <div className="container">
          <div className="row justify-content-center py-5 mt-5">
            <div className="col-md-5 heading-section text-center">
              <span className="subheading">Services</span>
              <h2 className="mb-4">Services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center d-flex">
              <div className="services-1 bg-light">
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
              </div>
            </div>
            <div className="col-md-4 text-center d-flex">
              <div className="services-1 bg-light">
                <span className="icon">
                  <i className="flaticon-network" />
                </span>
                <div className="desc">
                  <h3 className="mb-5">Marketing Goals</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center d-flex">
              <div className="services-1 bg-light">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
