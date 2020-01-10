import React from "react";
import "./AboutMe.scss";
import ReeseIMG from "../../images/ReeseIMG.png";
import { IoMdWine } from "react-icons/io";

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="section-header">
        <span>About Me</span>
      </div>
      <div className="about-me-content">
        <div className="about-me-text">
          <li>
            Currently a full-time Lambda School student living in Phoenix, AZ.
          </li>
          <li>
            Recent University of Arizona graduate with a Bachelor's in
            Marketing.
          </li>
          <li>
            Interested in helping fix societal problems and improving others'
            quality of life through technology.
          </li>
          <li>
            Other interests include: basketball, creative writing, watching TV,
            video games, and tiki drinks <IoMdWine size={15} color="black" /> .
          </li>
        </div>
        <div className="about-me-img-container">
          <div className="about-me-img">
            <img
              src={ReeseIMG}
              alt="A really handsome looking guy"
              className="about-me-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
