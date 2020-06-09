import React from "react";
import "./HireMePlz.scss";
import {
  IoLogoOctocat,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter
} from "react-icons/io";
// import FormikContactForm from "./ContactForm";
import EmailForm from "./EmailForm";
import GetInTouchBtn from "./GetInTouchBtn";

function openContactForm() {
  var popup = document.getElementById("popup-container");
  popup.style.display = "flex";

  var sectionHeader = document.getElementById("contact-header");
  sectionHeader.style.display = "none";

  var content = document.querySelector(".hire-me-content");
  content.style.display = "none";
}

function closeContactForm() {
  var popup = document.getElementById("popup-container");
  popup.style.display = "none";

  var sectionHeader = document.getElementById("contact-header");
  sectionHeader.style.display = "flex";

  var content = document.querySelector(".hire-me-content");
  content.style.display = "flex";
}

function HireMePlz() {
  return (
    <div className="hire-me-container" id="contact">
      <div className="section-header" id="contact-header">
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
              {/* <a href="#">Get in touch</a> */}
              <GetInTouchBtn />
            </div>
          </div>
        </div>
      </div>
      <div className="popup-container" id="popup-container">
        <div className="contact-popup">
          <p onClick={closeContactForm} className="close-btn">
            ❌
          </p>
          <div className="contact-me-form">
            <EmailForm />
          </div>
          <div className="contact-socials">
            <a href="https://github.com/reesekunz" className="icon">
              <IoLogoOctocat size={35} color="black" />
            </a>
            <a href="https://www.linkedin.com/in/reesekunz/" className="icon">
              <IoLogoLinkedin size={35} color="black" />
            </a>
            <a href="https://www.twitter.com/ReeseKunz" className="icon">
              <IoLogoTwitter size={35} color="black" />
            </a>
            <a href="https://www.instagram.com/reesekunz" className="icon">
              <IoLogoInstagram size={35} color="black" />
            </a>
            <a href="https://www.facebook.com/reesespieces21" className="icon">
              <IoLogoFacebook size={35} color="black" />
            </a>
          </div>
          <div className="contact-socials-mobile">
            <a href="https://github.com/reesekunz" className="icon">
              <IoLogoOctocat size={20} color="black" />
            </a>
            <a href="https://www.linkedin.com/in/reesekunz/" className="icon">
              <IoLogoLinkedin size={20} color="black" />
            </a>
            <a href="https://www.twitter.com/ReeseKunz" className="icon">
              <IoLogoTwitter size={20} color="black" />
            </a>
            <a href="https://www.instagram.com/reesekunz" className="icon">
              <IoLogoInstagram size={20} color="black" />
            </a>
            <a href="https://www.facebook.com/reesespieces21" className="icon">
              <IoLogoFacebook size={20} color="black" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireMePlz;
