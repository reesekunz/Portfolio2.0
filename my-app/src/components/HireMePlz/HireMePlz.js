import React from "react";
import "./HireMePlz.scss";
import {
  IoLogoOctocat,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter
} from "react-icons/io";
function openContactForm() {
  var popup = document.getElementById("popup-container");
  popup.style.display = "flex";
}

function closeContactForm() {
  var popup = document.getElementById("popup-container");
  popup.style.display = "none";
}

function HireMePlz() {
  return (
    <div className="hire-me-container">
      <div className="section-header">
        <span className="looking-to-hire">
          Looking to hire a web developer?
        </span>
        <span className="contact-me">Contact Me</span>
      </div>
      <div className="hire-me-content">
        <div className="hire-me-text">
          <div className="content">
            I'm seeking a full-time position and would love to chat! I'm open to
            relocation or remote work.
          </div>
          <div className="content">
            If you just want to chat, ask a question, or meet up for coffee (or
            tiki drink), let me know 🙂
          </div>
        </div>
        <div className="hire-me-wrapper">
          <div className="hire-me-btn-container">
            <div className="get-in-touch-btn" onClick={openContactForm}>
              Get in touch
            </div>
          </div>
        </div>
      </div>
      <div className="popup-container" id="popup-container">
        <div className="contact-popup">
          <p onClick={closeContactForm} className="close-btn">
            ❌
          </p>
          <p className="email">ReeseKunz21@gmail.com</p>
          <div className="contact-socials">
            <a href="https://github.com/reesekunz" className="icon">
              <IoLogoOctocat size={30} color="black" />
            </a>
            <a href="https://www.linkedin.com/in/reesekunz/" className="icon">
              <IoLogoLinkedin size={30} color="#4875B4" />
            </a>
            <a href="https://www.twitter.com/ReeseKunz" className="icon">
              <IoLogoTwitter size={30} color="#33CCFF" />
            </a>
            <a href="https://www.instagram.com/reesekunz" className="icon">
              <IoLogoInstagram size={30} color="#4E433C" />
            </a>
            <a href="https://www.facebook.com/reesespieces21" className="icon">
              <IoLogoFacebook size={30} color="#3B5998" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireMePlz;
