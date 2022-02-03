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
         Now based in Portland, Oregon, I'm a full-stack web developer and technical writer that also has a background in marketing from the University of Arizona. Currently I'm working as a developer at a startup called <a
              className="lambda-school"
              href="https://gemint.com/"
              target="_blank"
            >
              Gemint
            </a> and also recently obtained a technical writing certificate through Oregon State University.
{/* <a
              className="lambda-school"
              href="https://workspace.oregonstate.edu/certificate/technical-writing-certificate"
              target="_blank"
            >
              technical writing certification.
            </a>  */}
          </div>
          <div className="content">
          During my time as a student at the coding bootcamp  <a
              className="lambda-school"
              href="https://lambdaschool.com/"
              target="_blank"
            >
              Lambda School
            </a> (now called BloomTech) I gained valuable experience working with technologies such as ReactJS, JavaScript, NodeJS, ExpressJS, and Python.
          </div>
          <div className="content">
            Other interests: 🏀, {""}📺, {""}🎮, {""}⛰️, {""}🎶
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
