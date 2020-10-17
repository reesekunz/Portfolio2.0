import React from "react";
import "./Blog.scss";
import { IoIosArrowForward } from "react-icons/io";
function Blog() {
  return (
    <div className="blog-container" id="blog">
      <div className="section-header">
        <span>Skills</span>
      </div>
      <div className="blog-content">
        <div className="column" id="1">
          Column 1
        </div>
        <div className="column" id="2">
          <p>- JavaScript</p>
          <p>- Python</p>
          <p>- React</p>
          <p>- React hooks</p>
          <p>- HTML/CSS</p>
        </div>
        <div className="column" id="3">
          <p>- Django</p>
          <p>- Express</p>
          <p>- Redux</p>
          <p>- SQL</p>
          <p>- Sass</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
