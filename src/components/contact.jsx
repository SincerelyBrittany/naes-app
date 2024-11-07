import React from "react";
import { Link } from "react-router-dom";
import {
  FaGlobeAfrica,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegPaperPlane
} from "react-icons/fa";
import ContactForm from "./contactform";
import ContactFormTwo from "./contactformTwo";

export default function Contact() {
  return (
    <>
      <section
        className="ftco-section contact-section ftco-no-pb"
        id="contact-section"
      >
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center">
              <h2 className="mb-4">Contact Me</h2>
              {/* <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p> */}
            </div>
          </div>
          <div className="row d-flex contact-info mb-5">
            <div className="col-md-3 col-lg-2 d-flex ">
              {/* <div className="align-self-stretch box text-center p-4 bg-light">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                </div>
                <div>
                  <h3 className="mb-4">Address</h3>
                  <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
              </div> */}
            </div>
            <div className="col-md-3 col-lg-3 d-flex">
              <div className="align-self-stretch box text-center p-4 bg-light">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span>
                    {/* <FaPhoneAlt /> */}
                    <i className="fa fa-instagram"></i>
                  </span>
                </div>
                <div>
                  <h3 className="mb-4">Instagram</h3>
                  <p>
                    <Link to="https://www.instagram.com/naes.place/">Nae's Place</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex">
              <div className="align-self-stretch box text-center p-4 bg-light">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span>
                    <FaRegPaperPlane />
                  </span>
                </div>
                <div>
                  <h3 className="mb-4">Email Address</h3>
                  <p>
                    <Link to="mailto:naesplace59@gmail.com">naesplace59@gmail.com</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex">
              <div className="align-self-stretch box text-center p-4 bg-light">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span>
                    {/* <FaGlobeAfrica /> */}
                    <i className="fa fa-facebook"></i>
                  </span>
                </div>
                <div>
                  <h3 className="mb-4">Facebook</h3>
                  <p>
                    <Link to="https://www.facebook.com/p/Finicky-Felicia-100084813500514/?paipv=0&eav=AfYZFEEW3U-F3YIHA84OywVP7iyvvNdSnCIbrOEfu4jeLNCMo7GnPwep9JMj4oUha0Y&_rdr">Finicky Felicia</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row no-gutters block-9">
            <div className="col-md-6 order-md-last d-flex">
              <form action="#" className="bg-light p-4 p-md-5 contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name
                    id
                    cols={30}
                    rows={7}
                    className="form-control"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    defaultValue="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-6 d-flex">
              <div id="map" className="map" />
              <div class="img" style="background-image: url(images/about.jpg);"></div>
            </div>
          </div> */}
          
          {/* <ContactForm /> */}
          <ContactFormTwo />
        </div>
      </section>
    </>
  );
}
