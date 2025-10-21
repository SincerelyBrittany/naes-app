import React from "react";
import Slider from "react-slick";
import BgTestimonial from "../images/bg_4.jpg";
import PersonOne from "../images/person_1.jpg";
import PersonTwo from "../images/person_2.jpg";
import PersonThree from "../images/person_3.jpg";
import PersonFour from "../images/person_4.jpg";
import { FaQuoteLeft } from "react-icons/fa";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrow: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <section
        className="ftco-section testimony-section"
        id="testimonial-section"
      >
        <div
          className="img img-bg border"
          style={{ backgroundImage: `url(${BgTestimonial})` }}
        ></div>
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-12 text-center heading-section heading-section-white">
              <span className="subheading">Testimonial</span>
              <h2 className="mb-3">Kinds Words From Customers</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...settings}>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span>
                        <FaQuoteLeft />
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{ backgroundImage: `url(${PersonOne})` }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span>
                        <FaQuoteLeft />
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{ backgroundImage: `url(${PersonTwo})` }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span>
                        <FaQuoteLeft />
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{ backgroundImage: `url(${PersonThree})` }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span>
                        <FaQuoteLeft />
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{ backgroundImage: `url(${PersonFour})` }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span>
                        <FaQuoteLeft />
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{ backgroundImage: `url(${PersonFour})` }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
