import React from "react";
import "./Daughters.css";
import NaeFour from "../../assets/nae4.jpg";
import { daughterList } from "./DaughtersList";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Daughters() {
  return (
    <>
      <h1>My Daughters</h1>

      <div className="daughterContainer">
        {daughterList?.daughters?.map((daughter, index) => (
          <div className="daughterItem" key={index}>
            <h4> {daughter.name} </h4>
            <h6> {daughter.title} </h6>
            <div className="daughter-image">
              <img
                src={NaeFour}
                className="img-fluid"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div className="daugter-image-text"> {daughter.bio}</div>
            <span>
              {" "}
              <a href={daughter.website} target="_blank">
                <FacebookIcon />
              </a>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Daughters;
