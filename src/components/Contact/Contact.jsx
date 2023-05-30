import React from "react";

import Container from "react-bootstrap/Container";

import EmailIcon from "@material-ui/icons/Email";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./Contact.css";
import MailchimpForm from "../Subscribe/MailChimpForm";

const Contact = () => {
  return (
    <Container>
      <div>
        <h1> Contact</h1>
      </div>
      <br></br>
      <div class="row">
        <div class="col ">
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
        <div class="col-6 ">
          <MailchimpForm />
        </div>
        <div class="col ">
          <div>
            <EmailIcon />
          </div>
          <div> Email </div>
          <div>naesplace57@gmail.com</div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
