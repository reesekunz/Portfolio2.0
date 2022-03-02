import React from "react";
import {
  IoLogoOctocat,
  IoLogoLinkedin, 
  IoLogoTwitter
} from "react-icons/io";
import { AiOutlineMedium } from "react-icons/ai";

import "./Footer.scss";
function Footer() {
  return (
    <div className="footer-container" id="footer">
      <a
        href="https://github.com/reesekunz"
        className="footer-icon"
        target="_blank"
        id="github"
      >
        <IoLogoOctocat className="logo-icon" size={40} color="white" />
      </a>
      <a
        href="https://www.linkedin.com/in/reesekunz/"
        className="footer-icon"
        target="_blank"
        id="linkedin"
      >
        <IoLogoLinkedin className="logo-icon" size={40} color="white" />
      </a>
      <a
        href="https://www.twitter.com/ReeseKunz"
        className="footer-icon"
        target="_blank"
        id="twitter"
      >
        <IoLogoTwitter className="logo-icon" size={40} color="white" />
      </a>
      <a
        href="https://medium.com/@reesek/"
        className="footer-icon"
        target="_blank"
        id="medium"
      >
        <AiOutlineMedium className="logo-icon" size={40} color="white" />
      </a>
     
      {/* Mobile view  */}
      <a
        href="https://github.com/reesekunz"
        className="footer-icon-mobile"
        target="_blank"
        id="github"
      >
        <IoLogoOctocat className="logo-icon" size={30} color="white" />
      </a>
      <a
        href="https://www.linkedin.com/in/reesekunz/"
        className="footer-icon-mobile"
        target="_blank"
        id="linkedin"
      >
        <IoLogoLinkedin className="logo-icon" size={30} color="white" />
      </a>
      <a
        href="https://www.twitter.com/ReeseKunz"
        className="footer-icon-mobile"
        target="_blank"
        id="twitter"
      >
        <IoLogoTwitter className="logo-icon" size={30} color="white" />
      </a>
      <a
        href="https://medium.com/@reesek/"
        className="footer-icon-mobile"
        target="_blank"
        id="medium"
      >
        <AiOutlineMedium className="logo-icon" size={30} color="white" />
      </a>
     
    </div>
  );
}

export default Footer;
