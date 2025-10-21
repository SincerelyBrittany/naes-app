import React from "react";
import { Link } from "react-router-dom";
import PartnerOne from "../images/partner-1.png";
import PartnerTwo from "../images/partner-2.png";
import PartnerThree from "../images/partner-3.png";
import PartnerFour from "../images/Barnes_&_Noble_logo.png";
import PartnerFive from "../images/Amazon_logo.jpg";

export default function Partner() {
  return (
    <>
      <section className="ftco-section ftco-no-pb ftco-partner">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-12 col-lg">
              <Link to="#" className="partner d-flex justify-content-center">
                <img
                  src={PartnerOne}
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </Link>
            </div> */}
            {/* <div className="col-md-12 col-lg">
              <Link to="#" className="partner d-flex justify-content-center">
                <img
                  src={PartnerTwo}
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </Link>
            </div> */}
            {/* <div className="col-md-12 col-lg">
              <Link to="#" className="partner d-flex justify-content-center">
                <img
                  src={PartnerThree}
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </Link>
            </div> */}
            <div className="col-md-12 col-lg">
              <Link to="https://www.barnesandnoble.com/w/finicky-felicia-narene-russell/1144045912" className="partner d-flex justify-content-center">
                <img
                  src={PartnerFour}
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </Link>
            </div>
            <div className="col-md-12 col-lg">
              <Link to="https://www.amazon.com/Finicky-Felicia-Narene-Russell/dp/B0B45CHGVW/ref=sr_1_1?crid=3NMZ283ZYZ90W&dib=eyJ2IjoiMSJ9.crTQ4Ru720n3_b0M-03PJqCdHze-KWUCCHxwBiMkcWDOgvcmJk5opKU_3fUbpQ-s5QItVPZvU39dsTPavgPkbQ.65pcWQkMAwhjDEpWpDpPFXbSEkgPSkyv4uY7eKd8KW4&dib_tag=se&keywords=finicky+felicia&qid=1735847931&sprefix=finicky+felicia%2Caps%2C98&sr=8-1" className="partner d-flex justify-content-center">
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
