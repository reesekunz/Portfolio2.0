import React from "react";
import "./Blog.scss";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="skills-container" id="blog">
      <div className="section-header">
        <span>Blog</span>
      </div>
    <div className='blog-links'>
      <a className='blog-link' href="https://medium.com/@reesek/gemint-product-updates-march-2-2022-92f815bea944?source=user_profile---------0-------------------------------">
      Gemint Product Updates — March 2, 2022
      </a>
      <div id='view-all-wrapper'>
      <a id='view-all-link' href="https://medium.com/@reesek">View All</a>
      </div>
      </div>
    </div>
  );
}

export default Blog;
