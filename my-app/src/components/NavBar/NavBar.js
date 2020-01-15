import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavBar.scss";
// function scrollToTop() {
//   scroll.scrollToTop();
// }

function NavBar() {
  return (
    <div>
      <nav className="nav" id="navbar">
        <div className="nav-content">
          {/* <button className="back-to-top-btn" onClick={scrollToTop}>
          Back to Top
        </button> */}
          <div className="nav-items">
            <div className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Me
              </Link>
            </div>
            <div className="nav-item">
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Portfolio
              </Link>
            </div>
            {/* <li className="nav-item">
              <Link
                activeClass="active"
                to="blog"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Blog
              </Link>
            </li> */}
            <div className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
