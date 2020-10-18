import React from "react";
import "./Blog.scss";
import { IoIosRocket } from "react-icons/io";
import { Link } from "react-router-dom";
function Blog() {
  return (
    <div className="blog-container" id="blog">
      <div className="section-header">
        <span>Skills</span>
      </div>
      <div className="blog-content">
        <div className="column" id="1">
          <p>
            I have over a year of immersive, hands-on experience working
            primarily with these technologies to provide user-friendly,
            accessible, and creative single-page applications. Always down to
            learn new technologies, too!
          </p>
          <div className="resume-wrapper">
            <Link to="/Reese_Resume.pdf" target="_blank" download>
              Resume <IoIosRocket size={32} className="icon" />
            </Link>
          </div>
        </div>
        <div className="column" id="2">
          <p>- React</p>
          <p>- Redux</p>
          <p>- Gatsby</p>
          <p>- JavaScript</p>
          <p>- HTML/CSS</p>
          <p>- React Hooks</p>
          <p>- Node/Express</p>
        </div>
        <div className="column" id="3">
          <p>- SQL</p>
          <p>- Jest</p>
          <p>- AJAX</p>
          <p>- Python</p>
          <p>- Django</p>
          <p>- REST API</p>
          <p>- CSS Preprocessors</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
