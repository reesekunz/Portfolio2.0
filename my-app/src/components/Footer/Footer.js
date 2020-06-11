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
      <a
        href="https://github.com/reesekunz"
        className="footer-icon"
        target="_blank"
      >
        <IoLogoOctocat className="logo-icon" size={40} color="white" />
      </a>
      <a
        href="https://www.linkedin.com/in/reesekunz/"
        className="footer-icon"
        target="_blank"
      >
        <IoLogoLinkedin className="logo-icon" size={40} color="white" />
      </a>
      <a
        href="https://www.twitter.com/ReeseKunz"
        className="footer-icon"
        target="_blank"
      >
        <IoLogoTwitter className="logo-icon" size={40} color="white" />
      </a>
      <a
        href="https://www.instagram.com/reesekunz"
        className="footer-icon"
        target="_blank"
      >
        <IoLogoInstagram className="logo-icon" size={40} color="white" />
      </a>
      <a
        href="https://www.facebook.com/reesespieces21"
        className="footer-icon"
        target="_blank"
      >
        <IoLogoFacebook className="logo-icon" size={40} color="white" />
      </a>
      {/* Mobile view  */}
      <a
        href="https://github.com/reesekunz"
        className="footer-icon-mobile"
        target="_blank"
      >
        <IoLogoOctocat className="logo-icon" size={30} color="white" />
      </a>
      <a
        href="https://www.linkedin.com/in/reesekunz/"
        className="footer-icon-mobile"
        target="_blank"
      >
        <IoLogoLinkedin className="logo-icon" size={30} color="white" />
      </a>
      <a
        href="https://www.twitter.com/ReeseKunz"
        className="footer-icon-mobile"
        target="_blank"
      >
        <IoLogoTwitter className="logo-icon" size={30} color="white" />
      </a>
      <a
        href="https://www.instagram.com/reesekunz"
        className="footer-icon-mobile"
        target="_blank"
      >
        <IoLogoInstagram className="logo-icon" size={30} color="white" />
      </a>
      <a
        href="https://www.facebook.com/reesespieces21"
        className="footer-icon-mobile"
        target="_blank"
      >
        <IoLogoFacebook className="logo-icon" size={30} color="white" />
      </a>
    </div>
  );
}

export default Footer;
