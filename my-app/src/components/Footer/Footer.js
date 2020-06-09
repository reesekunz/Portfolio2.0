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
        <IoLogoOctocat className="logo-icon" size={40} color="white" />
      </a>
      <a href="https://www.linkedin.com/in/reesekunz/" className="footer-icon">
        <IoLogoLinkedin className="logo-icon" size={40} color="white" />
      </a>
      <a href="https://www.twitter.com/ReeseKunz" className="footer-icon">
        <IoLogoTwitter className="logo-icon" size={40} color="white" />
      </a>
      <a href="https://www.instagram.com/reesekunz" className="footer-icon">
        <IoLogoInstagram className="logo-icon" size={40} color="white" />
      </a>
      <a href="https://www.facebook.com/reesespieces21" className="footer-icon">
        <IoLogoFacebook className="logo-icon" size={40} color="white" />
      </a>
      {/* Mobile view  */}
      <a href="https://github.com/reesekunz" className="footer-icon-mobile">
        <IoLogoOctocat className="logo-icon" size={30} color="white" />
      </a>
      <a
        href="https://www.linkedin.com/in/reesekunz/"
        className="footer-icon-mobile"
      >
        <IoLogoLinkedin className="logo-icon" size={30} color="white" />
      </a>
      <a
        href="https://www.twitter.com/ReeseKunz"
        className="footer-icon-mobile"
      >
        <IoLogoTwitter className="logo-icon" size={30} color="white" />
      </a>
      <a
        href="https://www.instagram.com/reesekunz"
        className="footer-icon-mobile"
      >
        <IoLogoInstagram className="logo-icon" size={30} color="white" />
      </a>
      <a
        href="https://www.facebook.com/reesespieces21"
        className="footer-icon-mobile"
      >
        <IoLogoFacebook className="logo-icon" size={30} color="white" />
      </a>
    </div>
  );
}

export default Footer;
