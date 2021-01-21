import React from "react";
import "./HireMePlz.scss";
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
          {/* <div className="content">
            I'm seeking a full-time position and would love to chat! I'm open to
            relocation or remote work.
          </div> */}
          <div className="content">
            If you just want to chat, ask a question, or meet up for coffee (or
            tiki drink), let me know 🙂
          </div>
        </div>
        <div className="hire-me-wrapper">
          <div className="hire-me-btn-container">
            <div className="get-in-touch-btn" onClick={openContactForm}>
              <GetInTouchBtn />
            </div>
          </div>
        </div>
      </div>
      <div className="popup-container" id="popup-container">
        <div className="contact-popup">
          <p onClick={closeContactForm} className="close-btn">
            <div className="x">❌</div>
          </p>
          <div className="contact-me-form">
            <EmailForm />
          </div>
        </div>
      </div>
      <p className="thank-you">
        Thanks for your inquiry! I will try to get back to you as soon as
        possible. ❤️
      </p>
    </div>
  );
}

export default HireMePlz;
