import React from "react";
import "./AboutMe.scss";
import ReeseIMG from "../../images/ReeseIMG.png";

function AboutMe() {
  return (
    <div className="about-me-container" id="about">
      <div className="section-header">
        <span>About Me</span>
      </div>
      <div className="about-me-content">
        <div className="about-me-text">
          <div className="content">
            I'm currently enrolled as a full-stack web development student at{" "}
            <a href="https://lambdaschool.com/">Lambda School</a> and have been
            coding full-time for a little over a year. Before Lambda I graduated
            from the University of Arizona with a Bachelor's in Marketing.
          </div>
          <div className="content">
            I decided to pursue a career in web development because I'm
            interested in helping fix societal problems and improving others'
            quality of life through technology.
          </div>
          <div className="content">
            Other interests include: 🏀, ✍️, {""}📺, {""}🎮, {""}🍹
          </div>
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
