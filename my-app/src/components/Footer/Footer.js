import React from "react";
import {
  IoLogoOctocat,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter
} from "react-icons/io";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer-container" id="footer">
      <a href="https://github.com/reesekunz" className="footer-icon">
        <IoLogoOctocat size={40} color="white" />
      </a>
      <a href="https://www.linkedin.com/in/reesekunz/" className="footer-icon">
        <IoLogoLinkedin size={40} color="white" />
      </a>
      <a href="https://www.twitter.com/ReeseKunz" className="footer-icon">
        <IoLogoTwitter size={40} color="white" />
      </a>
      <a href="https://www.instagram.com/reesekunz" className="footer-icon">
        <IoLogoInstagram size={40} color="white" />
      </a>
      <a href="https://www.facebook.com/reesespieces21" className="footer-icon">
        <IoLogoFacebook size={40} color="white" />
      </a>
    </div>
  );
}

export default Footer;
