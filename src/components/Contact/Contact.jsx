import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./Contact.css";
// import MailchimpForm from "../Subscribe/MailChimpForm.jsx";

const Contact = () => {
  return (
    <div className="contact-container">
      <div class="some-page-wrapper">
        <div class="row">
          <div class="column">
            <div class="red-column">
              <h1>Contact</h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="blue-column">
              <h1>Socials</h1>
              <hr />
            </div>
          </div>
          <div class="column">
            {" "}
            <div class="blue-column">
              <h1> Email</h1>
              <hr />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="green-column">
              <div className="socials">
                <a
                  href="https://www.facebook.com/profile.php?id=100084813500514"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>

                <a href="https://www.instagram.com/naes.place/" target="_blank">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="blue-column">
              <div
                className="email"
                onClick={(e) => {
                  window.location.href = "mailto:naesplace57@gmail.com";
                }}
              >
                <h3>naesplace57@gmail.com</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="red-column"> {/* <MailchimpForm /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="row">
        <div className="col ">
          <div>
            <ThumbUpOffAltIcon />
          </div>
          <div>Connect</div>
          <div>
            <a
              href="https://www.facebook.com/profile.php?id=100084813500514"
              target="_blank"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100084813500514"
              target="_blank"
            >
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/naes.place/" target="_blank">
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="col-6 ">
          <MailchimpForm />
        </div>
        <div className="col ">
          <div>
            <EmailIcon />
          </div>
          <div> Email </div>
          <div>naesplace57@gmail.com</div>
        </div>
      </div> */
}

export default Contact;
