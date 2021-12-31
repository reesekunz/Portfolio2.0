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
          I'm a full-stack web developer with a background in marketing. Currently I'm working at a startup called <a
              className="lambda-school"
              href="https://gemint.com/"
              target="_blank"
            >
              Gemint
            </a> while also taking courses through Oregon State to get my               technical writing certification.
{/* <a
              className="lambda-school"
              href="https://workspace.oregonstate.edu/certificate/technical-writing-certificate"
              target="_blank"
            >
              technical writing certification.
            </a>  */}
          </div>
          <div className="content">
          During my time at  <a
              className="lambda-school"
              href="https://lambdaschool.com/"
              target="_blank"
            >
              Lambda School
            </a> (now called BloomTech) I gained valuable experience working with a wide variety of technologies, but primarly focused on: ReactJS, JavaScript, NodeJS, ExpressJS, and Python.
          </div>
          <div className="content">
            Other interests include: 🏀, ✍️, {""}📺, {""}🎮, {""}⛰️
          </div>
        </div>
        <div className="about-me-img-container">
          <div className="about-me-img">
            <img
              src={ReeseIMG}
              alt="A really handsome looking guy. You should totally hire him."
              className="about-me-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
