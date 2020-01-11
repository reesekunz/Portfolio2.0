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
      {/* Mobile view  */}
      <a href="https://github.com/reesekunz" className="footer-icon-mobile">
        <IoLogoOctocat size={30} color="white" />
      </a>
      <a
        href="https://www.linkedin.com/in/reesekunz/"
        className="footer-icon-mobile"
      >
        <IoLogoLinkedin size={30} color="white" />
      </a>
      <a
        href="https://www.twitter.com/ReeseKunz"
        className="footer-icon-mobile"
      >
        <IoLogoTwitter size={30} color="white" />
      </a>
      <a
        href="https://www.instagram.com/reesekunz"
        className="footer-icon-mobile"
      >
        <IoLogoInstagram size={30} color="white" />
      </a>
      <a
        href="https://www.facebook.com/reesespieces21"
        className="footer-icon-mobile"
      >
        <IoLogoFacebook size={30} color="white" />
      </a>
    </div>
  );
}

export default Footer;
