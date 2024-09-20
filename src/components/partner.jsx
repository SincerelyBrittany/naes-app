import React from "react";
import { Link } from "react-router-dom";
import PartnerOne from "../images/partner-1.png";
import PartnerTwo from "../images/partner-2.png";
import PartnerThree from "../images/partner-3.png";
import PartnerFour from "../images/partner-4.png";
import PartnerFive from "../images/partner-5.png";

export default function Partner() {
  return (
    <>
      <section className="ftco-section ftco-no-pb ftco-partner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg">
              <Link to="#" className="partner d-flex justify-content-center">
                <img
                  src={PartnerOne}
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </Link>
            </div>
            <div className="col-md-12 col-lg">
              <Link to="#" className="partner d-flex justify-content-center">
                <img
                  src={PartnerTwo}
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </Link>
            </div>
            <div className="col-md-12 col-lg">
              <Link to="#" className="partner d-flex justify-content-center">
                <img
                  src={PartnerThree}
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </Link>
            </div>
            <div className="col-md-12 col-lg">
              <Link to="#" className="partner d-flex justify-content-center">
                <img
                  src={PartnerFour}
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </Link>
            </div>
            <div className="col-md-12 col-lg">
              <Link to="#" className="partner d-flex justify-content-center">
                <img
                  src={PartnerFive}
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
