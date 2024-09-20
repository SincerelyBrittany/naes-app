import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegPaperPlane
} from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">About</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul className="d-flex ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="">
                    <Link to="#">
                      <span>
                        <FaTwitter className="icon" />
                      </span>
                    </Link>
                  </li>
                  <li className="">
                    <Link to="#">
                      <span>
                        <FaFacebookF />
                      </span>
                    </Link>
                  </li>
                  <li className="">
                    <Link to="#">
                      <span>
                        <FaInstagram className="icon" />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to="#">Home</Link>
                  </li>
                  <li>
                    <Link to="#">About</Link>
                  </li>
                  <li>
                    <Link to="#">Chapter</Link>
                  </li>
                  <li>
                    <Link to="#">Reviews</Link>
                  </li>
                  <li>
                    <Link to="#">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Services</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to="#">Experience</Link>
                  </li>
                  <li>
                    <Link to="#">Marketing Goals</Link>
                  </li>
                  <li>
                    <Link to="#">Targetting Vission</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon">
                        <FaMapMarkerAlt />
                      </span>
                      <span className="text">
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon">
                          <FaPhoneAlt />
                        </span>
                        <span className="text">+2 392 3929 210</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon">
                          <FaRegPaperPlane />
                        </span>
                        <span className="text">info@yourdomain.com</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                <Link to="https://colorlib.com" target="_blank">
                  Colorlib
                </Link>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
